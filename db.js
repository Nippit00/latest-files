const mysql = require('mysql');

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST || 'db_depa', // Use the service name
  user: process.env.DB_USER || 'MYSQL_USER',
  password: process.env.DB_PASSWORD || 'MYSQL_PASSWORD',
  database: process.env.DB_DATABASE || 'EvaluationSheet'
});

function queryDatabase(sql, params, callback) {
  pool.query(sql, params, (err, results) => {
    if (err) {
      console.error('Query error:', err);
      return callback(err);
    }
    callback(null, results);
  });
}

module.exports = { queryDatabase };
