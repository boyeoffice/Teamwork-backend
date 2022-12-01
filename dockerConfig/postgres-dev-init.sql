CREATE USER teamwork with encrypted password 'teamwork';
CREATE DATABASE teamwork_db;
GRANT ALL PRIVILEGES ON DATABASE  teamwork_db TO teamwork;

-- create test database
CREATE USER teamwork with encrypted password 'teamwork';
CREATE DATABASE teamwork_test_db;
GRANT ALL PRIVILEGES ON DATABASE  teamwork_test_db TO teamwork;
