drop table if exists users;

create table users (
    user_id serial primary key,
    user_name varchar(64),
    user_email varchar(64),
    user_hash text,
    user_role text,
    user_account int,
    center_id int REFERENCES centers
);

create table centers (
    center_id serial primary key,
    director_url text,
    director_address text,
    registration_form text,
    state_license text
);