INSERT INTO contract_times
    (
    center_id,
    day_of_week,
    age_group_id,
    program_id,
    in_time,
    out_time,
    before_school
    )
VALUES
    ($1, $2, $3, $4, $5, $6, $7 );