require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const { authCtrl, contractCtrl } = require("./controller");
const nodemailer = require("nodemailer");
const buildContractHours = require("./database/buildContractHours");

const app = express();
const {
  SERVER_PORT,
  CONNECTION_STRING,
  SESSION_SECRET,
  NODE_ENV,
  MAIL_USER,
  MAIL_PASSWORD,
  FROM,
  TO
} = process.env;
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASSWORD
  }
});
app.use(express.json());
app.use(express.static(`${__dirname}/../build`));

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("DB Set");
  if (NODE_ENV === "development") {
    db.seed([
      "$2a$10$3dKWS521L.WsyIQhSkbU1OB6hnBv4YfSJ2fsFZu.jpp0oCE7HAW.m",
      "$2a$10$Kbxk8ck0Sw9tcFp/0roDwOkoqqJIQMTSJnq0fIjREaJcMvGHyb8.y",
      "$2a$10$S1.snVMvfxIzi6/3zuFoWOpAXTS0WUH8ZvvOe0yimvfZChKne.Xba",
      "$2a$10$jBSjatGI0bcivvudeeDW6uC9HLwgQjv.2mcYp7ypXPw.HKULgKotm",
      "$2a$10$aTYRRNBbBOlcEBQL9hiuau3rwjmbxkJ8Uml8dDj42AVNvMHc34JOW",
      "$2a$10$WRBnpXvbA5DjixGHJowh4OdPB6HVd4WGi9L.1KCHIR2tIMpMPoVoK",
      "$2a$10$.npbtyo5ACM71sdqA.Uyyu5kyGrxaSYKGabbJHKLOvUdLiimJ5SLC",
      "$2a$10$lbIFnLUoXfHtZ1E0F9sQkuDlXoHSs6Sn5cW.zgBQMfPeGNE.FtOo6",
      "$2a$10$nnlHvJOQthfnZE5b9XLkg.7dnwZ8h.RB5pIi5Ycx8C.w9UA4nEuuO",
      "$2a$10$iJ9/RO7aPOZE5yKG8gKw6ONySXZHSelSgYZSNL4Rp1smgcOxppHWW"
    ]).then(() => {
      console.log("DB Seeded");
      buildContractHours(db).then(() => {
        console.log("contract_times seeded");
      });
    });
  } else {
    buildContractHours(db).then(() => {
      console.log("contract_times seeded");
    });
  }
  app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`));
});

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365
    }
  })
);

app.post("/api/email", (req, res) => {
  console.log(req.body);
  const { name, message, email, directorEmail, absentOrDropIn } = req.body;
  console.log(name, message, email);
  const mailOptions = {
    from: FROM,
    to: TO,
    subject: `ALERT: email from ${name}`,
    text: `from: ${email}\nmessage: ${message}`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send(error.message);
    } else {
      console.log(info);
      res.sendStatus(200);
    }
  });
});
app.post("/auth/register", authCtrl.register);
app.post("/auth/login", authCtrl.login);
app.post("/api/staff", authCtrl.createStaff);
app.post("/api/forms", authCtrl.createForm);
app.delete("/api/forms/:id", authCtrl.deleteForm);
app.get("/api/allstaff", authCtrl.allStaff);
app.put("/api/staff/:id", authCtrl.editStaff);
app.delete("/api/staff/:id", authCtrl.deleteStaff);
app.get("/api/staff", authCtrl.staff);
app.get("/api/forms", authCtrl.forms);
app.get("/api/centers", authCtrl.centers);
app.get("/api/signs3", authCtrl.aws3);
app.get("/api/contract", authCtrl.getContractDates);
app.post("/api/contract", authCtrl.addContract);
app.get("/api/contract/groups/:centerId", contractCtrl.getOptions);
app.get("/api/contract/:centerId/:ageGroupId/:programId", contractCtrl.getTimeOptions)
