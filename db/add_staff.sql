insert into staff
(
  staff_name,
  staff_info,
  staff_url,
  center_id 
)
values
(
  $1,
  $2,
  $3,
  $4
);
select * from staff;