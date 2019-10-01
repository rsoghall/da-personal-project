INSERT INTO contract_times
    (
    center_id,
    time_type,
    day_of_week,
    age_group_id,
    time_option,
    am_pm
    )
VALUES
    ($1, $2, $3, $4, $5, $6 );