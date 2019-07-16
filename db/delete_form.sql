delete from forms
where form_id = $1;

select * from forms;