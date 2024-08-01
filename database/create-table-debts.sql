CREATE TABLE IF NOT EXISTS debts (
    id SERIAL PRIMARY KEY,
    client_id INTEGER REFERENCES clients(id),
    amount DECIMAL(10, 2),
    institution VARCHAR(200),
    dueDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
