select centers.center_id, centers.center_name, staff_id, staff_name, staff_url, staff_info
from centers
join
staff on centers.center_id = staff.center_id;

