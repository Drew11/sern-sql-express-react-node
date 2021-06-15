CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    first_name text,
    last_name text,
    email text UNIQUE,
    gender text,
    ip_address text,
    CONSTRAINT email_unique UNIQUE (email)
);