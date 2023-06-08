const { Pool } = require('pg');

// new pool instance conect to database elephantSQL

const pool = new Pool({
  user: 'vbpuazlo',
  host: 'drona.db.elephantsql.com',
  database: 'vbpuazlo',
  password: 'v94chSwTqFJ1QvOJZfb4E68fHEK_zE7V',
  port: 5432,
});

// obtener usuarios
const getUsers = async (req, res) => {
  const response = await pool.query('SELECT * FROM users');
  res.status(200).json(response.rows);
};

// crear usuario
const createUser = async (req, res) => {
  const { user_name, user_lastname, user_phone, user_email, user_city } =
    req.body;
  const response = await pool.query(
    'INSERT INTO users (user_name, user_lastname, user_phone, user_email, user_city) VALUES ($1, $2, $3, $4, $5)',
    [user_name, user_lastname, user_phone, user_email, user_city]
  );
  res.json({
    message: 'User Added successfully',
    body: {
      users: { user_name, user_lastname, user_phone, user_email, user_city },
    },
  });
};

// obtener usuario por id
const getUserById = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  res.json(response.rows);
};

// Obtener determinada pregunta

const getQuestionById = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await pool.query('SELECT * FROM questions WHERE id = $1', [
    id,
  ]);
  res.json(response.rows);
};

module.exports = {
  getUsers,
  createUser,
  getUserById,
  getQuestionById,
};
