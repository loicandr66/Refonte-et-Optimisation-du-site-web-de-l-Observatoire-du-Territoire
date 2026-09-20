const bd = require('../bd');
const format = require('pg-format');

exports.add = async ({ username, email, password_hash }) => {
  const query = `
    INSERT INTO admins
      (username, email, password_hash)
    VALUES
      ($1, $2, $3)
    RETURNING id, username, email, password_hash, created_at;
  `;
  const result = await bd.query(query, [username, email, password_hash]);
  return result.rows[0];
};

exports.findByUsername = async (username) =>{
  const result = await bd.query(`SELECT id, username, password_hash, email FROM admins WHERE username = $1`, [username]);
  return result.rows[0];
};

exports.deleteById = async (id) => {
  const query = `
    DELETE FROM admins
    WHERE id = $1
    RETURNING id;
  `;
  const result = await bd.query(query, [id]);
  return result.rows[0];
};

exports.getAll = async () => {
    const result = await bd.query('SELECT * FROM admins');
    return result.rows;
};
