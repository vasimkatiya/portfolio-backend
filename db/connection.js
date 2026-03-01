const {Pool} = require('pg');
require('dotenv').config();

const pool = new  Pool({
    connectionString:process.env.DB_URL,
});

module.exports = pool;

// CREATE TABLE my_table (
//     id SERIAL PRIMARY KEY,                     -- auto-incrementing primary key
//     name TEXT NOT NULL,                        -- name of the item
//     rating INT CHECK (rating >= 1 AND rating <= 5) DEFAULT 1,  -- rating max 5, default 1
//     caption TEXT,                              -- optional caption
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- timestamp of creation
// );