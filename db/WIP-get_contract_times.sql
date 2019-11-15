select from contract_times ct
join age_groups ag
on ct.age_group_id = ag.age_group_id
join programs p on p.program_id = ct.age_group_id
where ct.center_id = 2
order by ct.age_group_id, ct.program_id;

select * from programs;