
drop table if exists contract_times;
drop table if exists age_groups;

CREATE TABLE age_groups
(
    age_group_id serial primary key,
    group_name varchar(64)
);

CREATE TABLE contract_times
(
    contract_time_id serial primary key,
    center_id INT REFERENCES centers,
    time_type VARCHAR(8),
    day_of_week INT,
    age_group_id INT REFERENCES age_groups,
    time_option time,
    am_pm VARCHAR(8)
);

INSERT INTO age_groups
    (group_name)
VALUES
    ('pre-k'),
    ('t-k'),
    ('kinder'),
    ('school-age')
