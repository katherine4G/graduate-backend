// db.js
require('dotenv').config();
const mysql = require('mysql2');

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

function connectWithRetry(attempt = 1) {
  const conn = mysql.createConnection(config);
  conn.connect(err => {
    if (err) {
      console.error(`Conexión fallida (intento ${attempt}):`, err.code);
      setTimeout(() => connectWithRetry(attempt + 1), 2000);
    } else {
      console.log('Conectado a MySQL');
    }
  });
  return conn;
}

module.exports = connectWithRetry();

// //db.js
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
