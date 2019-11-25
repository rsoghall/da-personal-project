select distinct ag.group_name, p.program_name, ag.age_group_id, p.program_id from contract_times ct
join age_groups ag
on ct.age_group_id = ag.age_group_id
join programs p on p.program_id = ct.program_id
where ct.center_id = $1
order by ag.group_name, p.program_name;