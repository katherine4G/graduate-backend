// backend/db.js
require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

client.connect(err => {
  if (err) {
    console.error('Error de conexión a Postgres:', err.stack);
  } else {
    console.log('Conectado a Postgres en Render');
  }
});

module.exports = client;

// //backend/db.js
// require('dotenv').config();
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error de conexión:', err);
//     return;
//   }
//   console.log('Conectado a MySQL');
// });

// module.exports = connection;
