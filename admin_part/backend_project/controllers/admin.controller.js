const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const adminModel = require('../models/admin.model');

const SALT_ROUNDS = 10;
const JWT_SECRET = 'rien_ne_va';

exports.addAdmin = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'username, email et password sont requis.' });
  }

  const password_hash = await bcrypt.hash(password, SALT_ROUNDS);

  try {
    const admin = await adminModel.add({
      username, email, password_hash
    });
    res.status(201).json(admin);
  } catch (err) {
    console.error('Erreur addAdmin:', err);
    res.status(500).json({ error: err.message });
  }
};

exports.logIn = async ( req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error : 'Username et Mot de Passe Obligatoires' });
  }
  try{
    
    const admin = await adminModel.findByUsername(username);
    if(!admin){
      return res.status(401).json({error : 'Username Incorrect'});
    }
    const valid = await bcrypt.compare(password, admin.password_hash);
    if(!valid){
      return res.status(401).json({error : 'Mot de Passe Incorrect'});
    }
    const token = jwt.sign(
      {id:admin.id}, JWT_SECRET, {expiresIn: '4h'}
    );
    res.json({
      token,
      user:{
        id: admin.id,
        username: admin.username,
        email: admin.email
      }
    });
  } catch (err){
    console.error('Erreur login:', err);
    res.status(500).json({ error: 'Erreur serveur.' });
  }
}

exports.deleteAdmin = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await adminModel.deleteById(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Administrateur non trouvé.' });
    }
    res.json({ message: 'Suppression réussie.', id: deleted.id });
  } catch (err) {
    console.error('Erreur deleteAdmin:', err);
    res.status(500).json({ error: err.message });
  }
};

exports.findAll = async (req, res) =>{
    try{
        const findAllAdmins = await adminModel.getAll();
        res.json(findAllAdmins);
    } catch(error){
        res.status(500).json({error: error.message});
    }
};
