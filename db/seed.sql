drop table if exists users;
drop table if exists centers;

create table centers (
    center_id serial primary key,
    center_name varchar(64),
    director_name varchar(64),
    director_url text,
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
insert into centers (
    center_name,
    director_name,
    director_url,
    director_address,
    director_phone,
    registration_form,
    state_license
) values (
    'Ayers',
    'Candice Rapo',
    'http://via.placeholder.com/100',
    '5120 Myrtle Drive, Concord CA 94521',
    '925.671.4922',
    'http://dianneadair.org/PDFs/Ayers%20Packet%202018.pdf',
    '070215110'
),
(
    'Bancroft',
    'Stefanie Lee',
    'http://via.placeholder.com/100',
    '2200 Parish Dr., Walnut Creek CA 94598',
    '925.938.4063',
    'http://dianneadair.org/PDFs/Dianne%20Adair%20at%20Bancroft%20Admission%20Packet.pdf',
    '07209004'
),
(
    'Delta View',
    'Marcia',
    'http://via.placeholder.com/100',
    '2916 Rio Verde Dr., Pittsburg CA 94565',
    '925.682.8000',
    'http://dianneadair.org/PDFs/Dianne%20Adair%20at%20Bancroft%20Admission%20Packet.pdf',
    '073404765'
),
(
    'El Monte',
    'Lisa Brady',
    'http://via.placeholder.com/100',
    '1400 Dina Drive, Concord, CA 94518',
    '925.682.5060',
    'http://dianneadair.org/PDFs/Dianne%20Adair%20El%20Monte%20Admission%20Packet%20Blanks%202017-2018.pdf',
    '070215177'
),
(
    'Highlands',
    'Danette Mullen',
    'http://via.placeholder.com/100',
    '1326 Pennsylvania, Concord CA 94521',
    '925.672.6144',
    'http://dianneadair.org/PDFs/Dianne%20Adair%20El%20Monte%20Admission%20Packet%20Blanks%202017-2018.pdf',
    '070207264'
),
(
    'Monte Gardens',
    'Shauna Potts',
    'http://via.placeholder.com/100',
    '3841 Larkspur Dr, Concord CA 94517',
    '925.356.2343',
    'http://dianneadair.org/PDFs/Dianne%20Adair%20El%20Monte%20Admission%20Packet%20Blanks%202017-2018.pdf',
    '073404777'
),
(
    'Pleasant Hill',
    'Cindy Hill',
    'http://via.placeholder.com/100',
    '2097 Oak Park Blvd, Pleasant Hill, CA 94523',
    '925.938.3043',
    'http://dianneadair.org/PDFs/ph_2018_packet.pdf',
    '070210164'
),
(
    'Sequoia',
    'Janet Moore',
    'http://via.placeholder.com/100',
    '277 Boyd Road, Pleasant Hill, CA 94523',
    '925.939.6336',
    'http://dianneadair.org/PDFs/Dianne%20Adair%20El%20Monte%20Admission%20Packet%20Blanks%202017-2018.pdf',
    '070210898'
),
(
    'Tice Creek',
    'Judy Angel',
    'http://via.placeholder.com/100',
    '1847 Newell Ave, Walnut Creek, CA 94595',
    '925.705.7255',
    'http://dianneadair.org/PDFs/TC_2018%20packet.pdf',
    '073407478'
),
(
    'Westwood',
    'Debbie Trammel',
    'http://via.placeholder.com/100',
    '1748 West Street, Concord, CA 94521',
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



