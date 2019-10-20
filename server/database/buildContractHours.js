const fs = require("fs");
const csv = require("csvtojson");
const massive = require("massive");
require("dotenv").config();
const { format } = require("date-fns");
const path = require('path')

function toMilitaryTime(time) {
  const isPm = time.includes(" PM");
  const formattedTime = time.replace(" PM", "").replace(" AM", "");
  let [h, m, s] = formattedTime.split(":");
  if (+h < 12 && isPm) {
    h = +h + 12;
  }
  return `${h}:${m}:${s}`;
}

const buildContractHours = async db => {
  const json = await csv().fromFile(path.join(__dirname, '../data/contract-times.csv'));
  await db.bootstrap_contract_hours();
  const results = await Promise.all(
    json.map(record => {
      const toTime = toMilitaryTime(record.time);
      return db.add_contract_hours([
        record.center_id,
        record.time_type,
        record.day_of_week,
        record.age_group,
        toTime,
        record.am_pm
      ]);
    })
  );
};

// massive(process.env.CONNECTION_STRING).then(db => {
//   buildContractHours(db);
// });

module.exports = buildContractHours;

// const ageGroups = ["pre-k", "kinder", "t-k", "school-age"](() => {})();
