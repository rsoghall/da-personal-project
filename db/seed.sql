drop table if exists centers;

create table centers (
    center_id serial primary key,
    director_url text,
    director_address text,
    registration_form text,
    state_license text
);

insert into centers (
    director_url,
    director_address,
    registration_form,
    state_license
) values (
    'http://via.placeholder.com/100',
    '123 main street, pleasanton, ca 94588',
    'http://google.com',
    'C7948798534'
);

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

insert into users (
    user_name, 
    user_email, 
    user_hash,
    user_role,
    user_account,
    center_id
) values (
    'travis',
    '123@pizza.com',
    $1,--password 123
    'fake',
    0,
    1
),
(
    'billybob',
    '456@pizza.com',
	$2, --password 456
    'fake',
    1,
    1 
);
