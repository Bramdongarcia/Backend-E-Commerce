const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'tramway.proxy.rlwy.net',
  port: '50664',
  user: 'root',    // e.g., 'root'
  password: 'MFeywLUWSQlQaApFdmGReUQRGaFIVSew',   // e.g., '123456'
  database: 'electronix_system', 
  ssl: {
        rejectUnauthorized: false
      }
  

});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

module.exports = db;