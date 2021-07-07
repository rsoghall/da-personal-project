select day_of_week, in_time, out_time, before_school from contract_times
where center_id = $1 AND age_group_id = $2 AND program_id = $3
order by day_of_week, before_school DESC, in_time, out_time;