const {Client} = require('pg');
require('dotenv').config();

// const SQL = `CREATE TABLE IF NOT EXISTS reviews (
//     id SERIAL PRIMARY KEY,
//     name TEXT NOT NULL, 
//     rating INT CHECK (rating >= 1 AND rating <= 5) DEFAULT 1,
//     caption TEXT,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
// );`

const main = async () =>{
    const client = new Client({
        connectionString:process.env.DB_URL,
    });
    
    await client.connect();
    await client.query(`CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL, 
    rating INT CHECK (rating >= 1 AND rating <= 5) DEFAULT 1,
    caption TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);`);
    await client.end();

}

module.exports = main;