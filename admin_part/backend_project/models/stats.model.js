const bd = require('../bd');
const format = require('pg-format');

//récupérer toutes les données de la table
exports.getAll = async () => {
    const result = await bd.query('SELECT * FROM statistiques');
    return result.rows;
};

//récupérer des données en triant les colonnes(certaine valeurs de colonnes en particulier)
exports.getByColumnValue = async (column, value) =>{
    const allowed_column = ['id_stats','nom_stats', 'type_stats', 'statut_stats'];
    if (!allowed_column.includes(column)){
        throw new Error('Colonne non autorisée');
    }
    const query = format(`SELECT * FROM statistiques WHERE %I = $1`, column);
    const result = await bd.query(query, [value]);
    return result.rows;
}


//supprimer des données
exports.deleteById = async (id) =>{
    const result = await bd.query(`DELETE FROM statistiques WHERE id_stats = $1 RETURNING *`, [id]);
    return result.rows;
}

exports.addOne = async ({nom_stats, type_stats, statut_stats, invest_stats}) =>{
    const result = await bd.query(`INSERT INTO statistiques (nom_stats, type_stats, statut_stats, invest_stats)
         VALUES ($1, $2, $3, $4) RETURNING *`, 
        [nom_stats, type_stats, statut_stats, invest_stats]);
    return result.rows[0];
}

exports.updateById = async (id_stats, nom_stats, type_stats, statut_stats, invest_stats) =>{
    const query = `UPDATE statistiques SET nom_stats = $1, type_stats = $2, statut_stats = $3, invest_stats = $4 WHERE id_stats = $5 RETURNING *`;
    const value = [nom_stats, type_stats, statut_stats, invest_stats, id_stats];
    try{
        const result = await bd.query(query, value);
        return result.rows;

    }catch(err){
        throw new Error('Erreur de mise à jour : ' + err.message);
    }
}