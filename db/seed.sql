drop table if exists users;
drop table if exists staff;
drop table if exists forms;
drop table if exists centers;


create table centers (
    center_id serial primary key,
    center_name varchar(64),
    director_name varchar(64),
    director_url text,
    director_email varchar(64),
    director_address text,
    director_phone text,
    registration_form text,
    state_license varchar(64)
);

create table users (
    user_id serial primary key,
    user_name varchar(64),
    user_email varchar(64),
    user_hash text,
    user_role text,
    user_account int,
    center_id int REFERENCES centers
);

create table staff (
    staff_id serial primary key,
    staff_name varchar(64),
    staff_info text,
    staff_url text,
    center_id int REFERENCES centers

);

create table forms (
    form_id serial primary key,
    form_name varchar(64),
    form_link text,
    center_id int REFERENCES centers
);

insert into centers (
    center_name,
    director_name,
    director_url,
    director_address,
    director_email,
    director_phone,
    registration_form,
    state_license
) values (
    'Ayers',
    'Candice Rapo',
    'https://s3-us-west-1.amazonaws.com/dianne-adair-images/Ayers.jpg',
    '5120 Myrtle Drive, Concord CA 94521',
    'Ayers@dianneadair.org',
    '925.671.4922',
    'http://dianneadair.org/PDFs/Ayers%20Packet%202018.pdf',
    '070215110'
),
(
    'Bancroft',
    'Stefanie Lee',
    'https://s3-us-west-1.amazonaws.com/dianne-adair-images/stefanie.jpg',
    '2200 Parish Dr., Walnut Creek CA 94598',
    'Bancroft@dianneadair.org',
    '925.938.4063',
    'http://dianneadair.org/PDFs/Dianne%20Adair%20at%20Bancroft%20Admission%20Packet.pdf',
    '07209004'
),
(
    'Delta View',
    'Marcia Brown',
    'http://via.placeholder.com/200',
    '2916 Rio Verde Dr., Pittsburg CA 94565',
    'DeltaView@dianneadair.org',
    '925.682.8000',
    'http://dianneadair.org/PDFs/Dianne%20Adair%20at%20Bancroft%20Admission%20Packet.pdf',
    '073404765'
),
(
    'El Monte',
    'Lisa Brady',
    'http://via.placeholder.com/200',
    '1400 Dina Drive, Concord, CA 94518',
    'ElMonte@dianneadair.org',
    '925.682.5060',
    'http://dianneadair.org/PDFs/Dianne%20Adair%20El%20Monte%20Admission%20Packet%20Blanks%202017-2018.pdf',
    '070215177'
),
(
    'Highlands',
    'Danette Mullen',
    'http://via.placeholder.com/200',
    '1326 Pennsylvania, Concord CA 94521',
    'Highlands@dianneadair.org',
    '925.672.6144',
    'http://dianneadair.org/PDFs/Dianne%20Adair%20El%20Monte%20Admission%20Packet%20Blanks%202017-2018.pdf',
    '070207264'
),
(
    'Monte Gardens',
    'Shauna Potts',
    'http://via.placeholder.com/200',
    '3841 Larkspur Dr, Concord CA 94517',
    'MonteGardens@dianneadair.org',
    '925.356.2343',
    'http://dianneadair.org/PDFs/Dianne%20Adair%20El%20Monte%20Admission%20Packet%20Blanks%202017-2018.pdf',
    '073404777'
),
(
    'Pleasant Hill',
    'Cindy Hill',
    'http://via.placeholder.com/200',
    '2097 Oak Park Blvd, Pleasant Hill, CA 94523',
    'PleasantHill@dianneadair.org',
    '925.938.3043',
    'http://dianneadair.org/PDFs/ph_2018_packet.pdf',
    '070210164'
),
(
    'Sequoia',
    'Janet Moore',
    'http://via.placeholder.com/200',
    '277 Boyd Road, Pleasant Hill, CA 94523',
    'Sequoia@dianneadair.org',
    '925.939.6336',
    'http://dianneadair.org/PDFs/Dianne%20Adair%20El%20Monte%20Admission%20Packet%20Blanks%202017-2018.pdf',
    '070210898'
),
(
    'Tice Creek',
    'Judy Angel',
    'http://via.placeholder.com/200',
    '1847 Newell Ave, Walnut Creek, CA 94595',
    'TiceCreek@dianneadair.org',
    '925.705.7255',
    'http://dianneadair.org/PDFs/TC_2018%20packet.pdf',
    '073407478'
),
(
    'Westwood',
    'Debbie Trammel',
    'http://via.placeholder.com/200',
    '1748 West Street, Concord, CA 94521',
    'Westwood@dianneadair.org',
    '925.969.1784',
    'http://dianneadair.org/PDFs/WW_2018%20Packet.pdf',
    '0703401954'
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
    '123',
    $1,--password 123
    'director',
    0,
    2
),
(
    'billybob',
    '456@pizza.com',
	$2, --password 456
    'director',
    1,
    1 
);

insert into staff (
    staff_name,
    staff_info,
    staff_url,
    center_id
) values (
    'Ryan',
    'teacher 2 years',
    'http://via.placeholder.com/100',
    1
),
(
    'Janet',
    'teacher 10 years',
    'http://via.placeholder.com/100',
    1
),
(
    'John',
    'teacher 5 years',
    'http://via.placeholder.com/100',
    2
),
(
    'Julie',
    'teacher 3 years',
    'http://via.placeholder.com/100',
    2
),
(
    'dummy',
    'teacher 2 years',
    'http://via.placeholder.com/100',
    1
);

insert into forms (
    form_name,
    form_link,
    center_id
) values (
    'Registration Forms',
    'http://dianneadair.org/PDFs/Dianne%20Adair%20at%20Bancroft%20Admission%20Packet.pdf',
    2
);