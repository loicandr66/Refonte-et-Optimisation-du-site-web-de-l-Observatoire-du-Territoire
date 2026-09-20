const bd = require('../bd');
const format = require('pg-format');

//récupérer toutes les données de la table
exports.getAll = async () => {
    const result = await bd.query('SELECT * FROM procédures');
    return result.rows;
};

//récupérer des données en triant les colonnes(certaine valeurs de colonnes en particulier)
exports.getByColumnValue = async (column, value) =>{
    const allowed_column = ['nom_procedure', 'type_procedure'];
    if (!allowed_column.includes(column)){
        throw new Error('Colonne non autorisée');
    }
    const query = format(`SELECT * FROM procédures WHERE %I = $1`, column);
    const result = await bd.query(query, [value]);
    return result.rows;
}


//supprimer des données
exports.deleteById = async (id) =>{
    const result = await bd.query(`DELETE FROM procédures WHERE id_procedure = $1 RETURNING *`, [id]);
    return result.rows;
}

exports.addOne = async ({nom_procedure, type_procedure, consult_procedure, down_procedure}) =>{
    const result = await bd.query(`INSERT INTO procédures (nom_procedure, type_procedure, consult_procedure, down_procedure)
         VALUES ($1, $2, $3, $4) RETURNING *`, 
        [nom_procedure, type_procedure, consult_procedure, down_procedure]);
    return result.rows[0];
}

exports.updateById = async (id_procedure, nom_procedure, type_procedure, consult_procedure, down_procedure) =>{
    const query = `UPDATE procédures SET nom_procedure = $1, type_procedure = $2, consult_procedure = $3, down_procedure = $4 WHERE id_procedure = $5 RETURNING *`;
    const value = [nom_procedure, type_procedure, consult_procedure, down_procedure, id_procedure];
    try{
        const result = await bd.query(query, value);
        return result.rows;

    }catch(err){
        throw new Error('Erreur de mise à jour : ' + err.message);
    }
}