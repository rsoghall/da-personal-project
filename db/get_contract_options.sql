select *
from contract_times
where center_id = $1 and age_group_id = $2
order by day_of_week, time_type, am_pm, time_option;