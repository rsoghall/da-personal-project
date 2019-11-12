const fs = require("fs");
const csv = require("csvtojson");
const massive = require("massive");
require("dotenv").config();
const { format } = require("date-fns");
const path = require("path");

// function toMilitaryTime(time) {
//   const isPm = time.includes(" PM");
//   const formattedTime = time.replace(" PM", "").replace(" AM", "");
//   let [h, m, s] = formattedTime.split(":");
//   if (+h < 12 && isPm) {
//     h = +h + 12;
//   }
//   return `${h}:${m}:${s}`;
// }

const buildContractHours = async db => {
  const json = await csv().fromFile(
    path.join(__dirname, "../data/contract-times.csv")
  );
  await db.bootstrap_contract_hours();
  const results = await Promise.all(
    json.map((record, index) => {
      // const toTime = toMilitaryTime(record.time);
      const inTime = record.in_time === "null" ? null : record.in_time;
      const outTime = record.out_time === "null" ? null : record.out_time;
      const beforeSchool =
        record.before_school.toLowerCase() === "false" ? false : true;
      return db.add_contract_hours([
        record.center_id,
        record.day_of_week,
        record.age_group_id,
        record.program,
        inTime,
        outTime,
        beforeSchool
      ]);
    })
  );
};

// massive(process.env.CONNECTION_STRING).then(db => {
//   buildContractHours(db).then(() => {
//     console.log("done");
//   });
// });

module.exports = buildContractHours;

// const ageGroups = ["pre-k", "kinder", "t-k", "school-age"](() => {})();
