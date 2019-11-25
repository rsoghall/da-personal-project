
drop table if exists contract_times;
drop table if exists age_groups;
drop table if exists programs;

CREATE TABLE age_groups
(
    age_group_id serial primary key,
    group_name varchar(64)
);

CREATE TABLE programs
(
  program_id SERIAL PRIMARY KEY,
  program_name VARCHAR(64)
);

CREATE TABLE contract_times
(
    contract_time_id serial primary key,
    center_id INT REFERENCES centers,
    day_of_week INT,
    age_group_id INT REFERENCES age_groups,
    program_id INT REFERENCES programs,
    in_time TIME,
    out_time TIME,
    before_school BOOLEAN
);

INSERT INTO age_groups
    (group_name)
VALUES
    ('pre-k'),
    ('t-k'),
    ('kinder'),
    ('school-age');

INSERT INTO programs
  (program_name)
VALUES
  ('curriculum'),
  ('full-day'),
  ('special-needs'),
  ('am'),
  ('pm'),
  ('early'),
  ('late');

