module.exports = {
  getOptions: async (req, res) => {
    const { centerId, ageGroup } = req.params;
    const db = req.app.get("db");
    const options = await db.get_contract_options([centerId, ageGroup]);
    const shapedOptions = new Array(5).fill(0).map((pos, i) => ({
      day: i + 1,
      am: {
        in: [],
        out: []
      },
      pm: {
        in: [],
        out: []
      }
    }));

    options.forEach(day => {
      const index = +day.day_of_week - 1;
      const amPm = day.am_pm.toLowerCase();
      const inOut = day.time_type.toLowerCase();
      shapedOptions[index][amPm][inOut].push(day.time_option);
    });
    return res.send(shapedOptions);
  }
};
