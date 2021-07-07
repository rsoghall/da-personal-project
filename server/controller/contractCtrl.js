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
  },
  getTimeOptions: async (req, res) => {
    const {centerId, ageGroupId, programId} = req.params;
    const db = req.app.get('db');
    const times = await db.get_contract_times(centerId, ageGroupId, programId);
    const formattedTimes = times.reduce((acc, curr) => {
    const {
      before_school: beforeSchool,
      in_time: inTime,
      out_time: outTime,
      day_of_week: dayOfWeek,
     } = curr;
     let active = acc.find(record => record.day === dayOfWeek);
     const group = beforeSchool ? 'before' : 'standard';
      if(!active) {
        const newRecord = {
          day: dayOfWeek,
          before: {
            in: [],
            out: [],
            inOut: []
          },
          standard: {
            in: [],
            out: [],
            inOut: []
          }
        }
        active = newRecord;
        acc.push(newRecord)
      }
      const activeGroup = active[group]
      if(inTime && outTime) {
        activeGroup.inOut.push([inTime, outTime])
      } else if(inTime) {
        activeGroup.in.push(inTime)
      } else if(outTime) {
        activeGroup.out.push(outTime)
      }
      return acc;
    }, [])
    res.send(formattedTimes);
  } 
};
