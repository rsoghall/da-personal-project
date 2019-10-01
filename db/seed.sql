drop table if exists contract_days;
drop table if exists contract_times;
drop table if exists age_groups;
drop table if exists contract;
drop table if exists users;
drop table if exists staff;
drop table if exists forms;
drop table if exists centers;


create table centers
(
    center_id serial primary key,
    center_name varchar(64),
    director_name varchar(64),
    director_url text,
    director_email varchar(64),
    director_address text,
    director_phone text,
    registration_form text,
    state_license varchar(64),
    calendar text
);

create table users
(
    user_id serial primary key,
    user_name varchar(64),
    user_email varchar(64),
    user_hash text,
    user_role text,
    user_account int,
    center_id int REFERENCES centers
);

create table staff
(
    staff_id serial primary key,
    staff_name varchar(64),
    staff_info text,
    staff_url text,
    center_id int REFERENCES centers

);

create table forms
(
    form_id serial primary key,
    form_name varchar(64),
    form_link text,
    center_id int REFERENCES centers
);

create table contract
(
    contract_id serial primary key,
    center_id int REFERENCES centers,
    child_name varchar(128),
    contract_month varchar(64),
    contract_year varchar(64),
    grade varchar(64)
);

create table contract_days
(
    contract_day_id SERIAL PRIMARY KEY,
    contract_id int REFERENCES contract,
    contract_date date,
    in_time varchar(64),
    week_number int,
    out_time varchar(64),
    total_hours decimal
);

insert into centers
    (
    center_name,
    director_name,
    director_url,
    director_address,
    director_email,
    director_phone,
    registration_form,
    state_license,
    calendar
    )
values
    (
        'Ayers',
        'Candice Rapo',
        'https://s3-us-west-1.amazonaws.com/dianne-adair-s3/images/Ayers/Ayers.jpg',
        '5120 Myrtle Drive, Concord CA 94521',
        'Ayers@dianneadair.org',
        '925.671.4922',
        'http://dianneadair.org/PDFs/Ayers%20Packet%202018.pdf',
        '070215110',
        'https://calendar.google.com/calendar/embed?src=dianneadair.org_84o21m4h41q8pal7dvsq93pi8s%40group.calendar.google.com&ctz=America%2FLos_Angeles'
),
    (
        'Bancroft',
        'Stefanie Lee',
        'https://dianne-adair-s3.s3.amazonaws.com/aa2f7dbb-4989-4c4a-9ea6-58a48ceb88a0-stefanie-2.jpg',
        '2200 Parish Dr., Walnut Creek CA 94598',
        'Bancroft@dianneadair.org',
        '925.938.4063',
        'http://dianneadair.org/PDFs/Dianne%20Adair%20at%20Bancroft%20Admission%20Packet.pdf',
        '07209004',
        'https://calendar.google.com/calendar/embed?src=dianneadair.org_hhlk2enfbips2g3m01t5mqs35o%40group.calendar.google.com&ctz=America%2FLos_Angeles'
),
    (
        'Delta View',
        'Marcia Brown',
        'https://dianne-adair-s3.s3.amazonaws.com/b61c5c08-9c33-4031-bdf0-3b1ce26caeb1-Marcia.jpg',
        '2916 Rio Verde Dr., Pittsburg CA 94565',
        'DeltaView@dianneadair.org',
        '925.682.8000',
        'http://dianneadair.org/PDFs/Dianne%20Adair%20at%20Bancroft%20Admission%20Packet.pdf',
        '073404765',
        'https://calendar.google.com/calendar/embed?src=dianneadair.org_l9bspgmbrj3fqbssgjgkergrss%40group.calendar.google.com&ctz=America%2FLos_Angeles'

),
    (
        'El Monte',
        'Lisa Brady',
        'https://dianne-adair-s3.s3.amazonaws.com/afd70908-333b-4087-8d6c-949f187be45c-DA-ElMonte-Lisa2.jpg',
        '1400 Dina Drive, Concord, CA 94518',
        'ElMonte@dianneadair.org',
        '925.682.5060',
        'http://dianneadair.org/PDFs/Dianne%20Adair%20El%20Monte%20Admission%20Packet%20Blanks%202017-2018.pdf',
        '070215177',
        'https://calendar.google.com/calendar/embed?src=dianneadair.org_2j3ebuvee5m5388a8vmp009fgo%40group.calendar.google.com&ctz=America%2FLos_Angeles'
),
    (
        'Highlands',
        'Danette Mullen',
        'https://dianne-adair-s3.s3.amazonaws.com/ecdf4ba5-91bd-40d9-8134-772ac09faad4-Danette-Highlands.jpg',
        '1326 Pennsylvania, Concord CA 94521',
        'Highlands@dianneadair.org',
        '925.672.6144',
        'http://dianneadair.org/PDFs/Dianne%20Adair%20El%20Monte%20Admission%20Packet%20Blanks%202017-2018.pdf',
        '070207264',
        'https://calendar.google.com/calendar/embed?src=dianneadair.org_u33griitv2jljeqr3e0pqki378%40group.calendar.google.com&ctz=America%2FLos_Angeles'
),
    (
        'Monte Gardens',
        'Shauna Potts',
        'https://dianne-adair-s3.s3.amazonaws.com/5e0ec16b-dd40-4420-a059-0d300c2ef3da-Shauna2.jpg',
        '3841 Larkspur Dr, Concord CA 94519',
        'MonteGardens@dianneadair.org',
        '925.356.2343',
        'http://dianneadair.org/PDFs/Dianne%20Adair%20El%20Monte%20Admission%20Packet%20Blanks%202017-2018.pdf',
        '073404777',
        'https://calendar.google.com/calendar/embed?src=dianneadair.org_c1sorinupm17cd3d2k0mpld8uk%40group.calendar.google.com&ctz=America%2FLos_Angeles'
),
    (
        'Pleasant Hill',
        'Cindy Hill',
        'https://dianne-adair-s3.s3.amazonaws.com/be6e8665-c9c9-4602-b560-caa704225eae-Cindy-PH-2.jpg',
        '2097 Oak Park Blvd, Pleasant Hill, CA 94523',
        'PleasantHill@dianneadair.org',
        '925.938.3043',
        'http://dianneadair.org/PDFs/ph_2018_packet.pdf',
        '070210164',
        'https://calendar.google.com/calendar/embed?src=dianneadair.org_u3tm43qhau7jr2j3nml6557dhk%40group.calendar.google.com&ctz=America%2FLos_Angeles'
),
    (
        'Sequoia',
        'Janet Moore',
        'https://dianne-adair-s3.s3.amazonaws.com/d52cb6c3-588d-4e50-8674-4b5866ee85cb-Janet.jpg',
        '277 Boyd Road, Pleasant Hill, CA 94523',
        'Sequoia@dianneadair.org',
        '925.939.6336',
        'http://dianneadair.org/PDFs/Dianne%20Adair%20El%20Monte%20Admission%20Packet%20Blanks%202017-2018.pdf',
        '070210898',
        'https://calendar.google.com/calendar/embed?src=dianneadair.org_ui9cdlosc3fkn71brgjjklgqu4%40group.calendar.google.com&ctz=America%2FLos_Angeles'
),
    (
        'Tice Creek',
        'Judy Angel',
        'https://dianne-adair-s3.s3.amazonaws.com/36aad290-9842-47d8-84c6-bf21d721f68c-Judy-Jerry.jpg',
        '1847 Newell Ave, Walnut Creek, CA 94595',
        'TiceCreek@dianneadair.org',
        '925.705.7255',
        -- 'http://dianneadair.org/PDFs/TC_2018%20packet.pdf',
        'http://weblink.donorperfect.com/dae_reg_tikes_creek',
        '073407478',
        'https://calendar.google.com/calendar/embed?src=dianneadair.org_l98lf6ej1edaduplstssv131bo%40group.calendar.google.com&ctz=America%2FLos_Angeles'
),
    (
        'Westwood',
        'Debbie Trammel',
        'https://dianne-adair-s3.s3.amazonaws.com/50a5244c-8cef-4a62-9f87-75a836d7b440-Debbie.jpg',
        '1748 West Street, Concord, CA 94521',
        'Westwood@dianneadair.org',
        '925.969.1784',
        'http://dianneadair.org/PDFs/WW_2018%20Packet.pdf',
        '0703401954',
        'https://calendar.google.com/calendar/embed?src=dianneadair.org_kj1or7lu4fcuf408b98bed0jho%40group.calendar.google.com&ctz=America%2FLos_Angeles'
);

insert into users
    (
    user_name,
    user_email,
    user_hash,
    user_role,
    user_account,
    center_id
    )
values
    (
        '1',
        '1',
        $1, --password 1
        'director',
        1,
        1 
),
    (
        '2',
        '2',
        $2, --password 2
        'director',
        2,
        2 
),

    (
        '3',
        '3',
        $3, --password 3
        'director',
        3,
        3 
),
    (
        '4',
        '4',
        $4, --password 4
        'director',
        4,
        4 
),
    (
        '5',
        '5',
        $5, --password 5
        'director',
        5,
        5 
),
    (
        '6',
        '6',
        $6, --password 6
        'director',
        6,
        6 
),
    (
        '7',
        '7',
        $7, --password 7
        'director',
        7,
        7 
),
    (
        '8',
        '8',
        $8, --password 8
        'director',
        8,
        8 
),
    (
        '9',
        '9',
        $9, --password 9
        'director',
        9,
        9 
),
    (
        '10',
        '10',
        $10, --password 10
        'director',
        10,
        10 
);
insert into staff
    (
    staff_name,
    staff_info,
    staff_url,
    center_id
    )
values
    (
        'Ryan',
        'teacher 2 years',
        'http://via.placeholder.com/100',
        1
);



insert into forms
    (
    form_name,
    form_link,
    center_id
    )
values
    (
        'Registration Forms',
        'http://dianneadair.org/PDFs/Dianne%20Adair%20at%20Bancroft%20Admission%20Packet.pdf',
        2
);


INSERT INTO contract
    (center_id, child_name, contract_month, contract_year, grade)
VALUES
    (1, 'Billy', 8, 2019, 'pre-k'),
    (1, 'Jane', 8, 2019, 'school age'),
    (1, 'Joe', 8, 2019, 'kinder');

INSERT INTO contract_days
    (contract_id, contract_date, in_time, out_time, total_hours, week_number)
VALUES
    (1, '2019-09-02T06:00:00.000Z', '7:30 AM', '3:00 PM', 7.5, 1),
    (1, '2019-09-03T06:00:00.000Z', '7:30 AM', '3:00 PM', 7.5, 1),
    (1, '2019-09-04T06:00:00.000Z', '7:30 AM', '3:00 PM', 7.5, 1),
    (1, '2019-09-09T06:00:00.000Z', '7:30 AM', '3:00 PM', 7.5, 2),
    (1, '2019-09-10T06:00:00.000Z', '7:30 AM', '3:00 PM', 7.5, 2),
    (1, '2019-09-11T06:00:00.000Z', '7:30 AM', '3:00 PM', 7.5, 2),
    (1, '2019-09-16T06:00:00.000Z', '7:30 AM', '3:00 PM', 7.5, 3),
    (1, '2019-09-17T06:00:00.000Z', '7:30 AM', '3:00 PM', 7.5, 3),
    (1, '2019-09-18T06:00:00.000Z', '7:30 AM', '3:00 PM', 7.5, 3),
    (2, '2019-09-02T06:00:00.000Z', '8:30 AM', '3:00 PM', 6.5, 1),
    (2, '2019-09-03T06:00:00.000Z', '8:30 AM', '3:00 PM', 6.5, 1),
    (2, '2019-09-04T06:00:00.000Z', '8:30 AM', '3:00 PM', 6.5, 1),
    (2, '2019-09-09T06:00:00.000Z', '8:30 AM', '3:00 PM', 6.5, 2),
    (2, '2019-09-10T06:00:00.000Z', '8:30 AM', '3:00 PM', 6.5, 2),
    (2, '2019-09-11T06:00:00.000Z', '8:30 AM', '3:00 PM', 6.5, 2),
    (2, '2019-09-16T06:00:00.000Z', '8:30 AM', '3:00 PM', 6.5, 3),
    (2, '2019-09-17T06:00:00.000Z', '8:30 AM', '3:00 PM', 6.5, 3),
    (2, '2019-09-18T06:00:00.000Z', '8:30 AM', '3:00 PM', 6.5, 3);



