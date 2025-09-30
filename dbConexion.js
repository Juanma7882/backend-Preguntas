// importante instalar los paquetes conrrespondientes para la base de datos npm
const { Pool } = require("pg");

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'bdpreguntas',
  user: 'postgres',
  password: 'admin'
});

pool.connect()
  .then(client => {
    console.log('✅ Conexión exitosa a PostgreSQL');
    client.release();
  })
  .catch(err => console.error('❌ Error de conexión', err.stack));

module.exports = pool;