insert into users (
    user_name, 
    user_email,
    user_hash,
    user_role,
    user_account
) values (
    $1,
    $2,
    $3,
    $4,
    $5
) returning *;
