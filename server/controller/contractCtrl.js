module.exports = {
  getOptions: async (req, res) => {
    const {centerId} = req.params;
    const db = req.app.get('db');
    const results = await db.get_center_age_group_program([centerId]);
    const shapedResults = results.reduce((acc, curr) => {
      let located = acc.find(item => item.id === curr.age_group_id)
      if(!located) {
        located = {
          id: curr.age_group_id,
          ageGroupName: curr.group_name,
          programs: []
        }
        acc.push(located);
      }
      located.programs.push({
        programId: curr.program_id,
        programName: curr.program_name,
      })
      return acc;
    }, [])
    res.send(shapedResults) 
  }
};
