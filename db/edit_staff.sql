update staff 
set staff_name =$2, staff_info =$3, staff_url=$4
where staff_id = $1;

select * from staff;