const bcrypt = require("bcryptjs");
require("dotenv").config();

const aws = require("aws-sdk");

const {
  S3_BUCKET,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION
} = process.env;

module.exports = {
  register: async (req, res) => {
    console.log("method hit");
    try {
      const {
        user_name,
        user_email,
        password,
        user_role,
        user_account,
        center_id
      } = req.body;
      console.log(req.body);
      const db = req.app.get("db");
      const [foundUser] = await db.check_email([user_email]);
      console.log("found user", foundUser);
      if (foundUser) {
        console.log("after userfound");
        return res.status(403).send({ message: "Email already exists" });
      }
      const salt = bcrypt.genSaltSync(10);
      console.log(password, salt);
      const hash = bcrypt.hashSync(password, salt);
      console.log(hash);
      const [newUser] = await db.register_user([
        user_name,
        user_email,
        hash,
        user_role,
        user_account,
        center_id
      ]);
      console.log(newUser);
      req.session.user = {
        user_id: newUser.user_id,
        user_name: newUser.user_name,
        user_email: newUser.user_email,
        user_role: newUser.user_role,
        user_account: newUser.user_account,
        center_id: newUser.center_id
      };
      res.status(200).send({
        message: "logged in",
        userData: req.session.user,
        loggedIn: true
      });
    } catch (error) {
      console.log({ error });
      res.status(500).send(error);
    }
  },

  login: async (req, res) => {
    try {
      const { email: user_email, password } = req.body;
      console.log(user_email, password);
      let db = req.app.get("db");
      const [foundUser] = await db.login_user([user_email]);
      console.log(foundUser);
      if (!foundUser) {
        return res.status(404).send("User not found");
      }
      const isAuth = bcrypt.compareSync(password, foundUser.user_hash);
      if (isAuth) {
        req.session.user_id = foundUser.user_id;
        req.session.center_id = foundUser.center_id;
        res
          .status(200)
          .send({ centerId: foundUser.center_id, role: foundUser.user_role });
      } else {
        res.status(401).send("incorrect password");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },

  centers: async (req, res) => {
    try {
      const db = req.app.get("db");
      const centerArr = await db.get_centers();
      res.status(200).send(centerArr);
    } catch (error) {
      console.log({ error });
      res.status(500).send(error);
    }
  },

  staff: async (req, res) => {
    try {
      const db = req.app.get("db");
      const staffArr = await db.get_staff();
      res.status(200).send(staffArr);
    } catch (error) {
      console.log({ error });
      res.status(500).send(error);
    }
  },

  editStaff: async (req, res) => {
    try {
      const { staffName, staffInfo, staffUrl } = req.body;
      const staffId = req.params.id;
      const db = req.app.get("db");
      const newStaff = await db.edit_staff(
        staffId,
        staffName,
        staffInfo,
        staffUrl
      );
      res.status(200).send(newStaff);
    } catch (error) {
      console.log({ error });
      res.status(500).send(error);
    }
  },

  createStaff: async (req, res) => {
    try {
      const { staffName, staffInfo, staffUrl } = req.body;
      const centerId = req.session.center_id;
      const db = req.app.get("db");
      const addStaff = await db.add_staff(
        staffName,
        staffInfo,
        staffUrl,
        centerId
      );
      res.status(200).send(addStaff);
    } catch (error) {
      console.log({ error });
      res.status(500).send(error);
    }
  },

  deleteStaff: async (req, res) => {
    try {
      const staffId = req.params.id;
      const db = req.app.get("db");
      const delStaff = await db.delete_staff(staffId);
      res.status(200).send(delStaff);
    } catch (error) {
      console.log({ error });
      res.status(500).send(error);
    }
  },

  aws3: (req, res) => {
    aws.config = {
      region: AWS_REGION,
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY
    };

    const s3 = new aws.S3();
    const fileName = req.query["file-name"];
    const fileType = req.query["file-type"];
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 60,
      ContentType: fileType,
      ACL: "public-read"
    };

    s3.getSignedUrl("putObject", s3Params, (err, data) => {
      if (err) {
        console.log(err);
        return res.end();
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
      };

      return res.send(returnData);
    });
  },
  allStaff: async (req, res) => {
    try {
      const db = req.app.get("db");
      const staffArr = await db.get_all_staff();
      const shapeStaff = staffArr.reduce((acc, cv) => {
        if (!acc[cv.center_id]) {
          acc[cv.center_id] = {
            centerId: cv.center_id,
            centerName: cv.center_name,
            staff: []
          };
        }
        acc[cv.center_id].staff.push({
          staffId: cv.staff_id,
          staffName: cv.staff_name,
          staffUrl: cv.staff_url,
          staffInfo: cv.staff_info
        });
        return acc;
      }, {});
      res.status(200).send(Object.values(shapeStaff));
    } catch (error) {
      console.log({ error });
      res.status(500).send(error);
    }
  }
};
