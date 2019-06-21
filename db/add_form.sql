insert into forms
(
  form_name,
  form_link,
  center_id 
)
values
(
  $1,
  $2,
  $3
);
select * from forms;