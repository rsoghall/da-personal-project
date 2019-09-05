INSERT INTO contract
    (center_id, child_name, contract_month, contract_year, grade)
VALUES
    ($1, $2, $3, $4, $5)
RETURNING *;

