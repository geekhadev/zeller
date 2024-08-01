CREATE TYPE message_role_enum AS ENUM ('client', 'agent');

CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    client_id INTEGER REFERENCES clients(id),
    text VARCHAR(100),
    sentAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    role message_role_enum DEFAULT 'client'
);
