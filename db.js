const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',    // e.g., 'root'
  password: 'ROOT',   // e.g., '123456'
  database: 'electronix_system'  // e.g., 'electrodomesticos'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

module.exports = db;