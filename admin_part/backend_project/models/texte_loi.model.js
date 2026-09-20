const bd = require('../bd');
const format = require('pg-format');

//récupérer toutes les données de la table
exports.getAll = async () => {
    const result = await bd.query('SELECT * FROM texte_lois');
    return result.rows;
};

//récupérer des données en triant les colonnes(certaine valeurs de colonnes en particulier)
exports.getByColumnValue = async (column, value) =>{
    const allowed_column = ['titre_tl', 'type_tl'];
    if (!allowed_column.includes(column)){
        throw new Error('Colonne non autorisée');
    }
    const query = format(`SELECT * FROM texte_lois WHERE %I = $1`, column);
    const result = await bd.query(query, [value]);
    return result.rows;
}


//supprimer des données
exports.deleteById = async (id) =>{
    const result = await bd.query(`DELETE FROM texte_lois WHERE id_tl = $1 RETURNING *`, [id]);
    return result.rows;
}

exports.addOne = async ({titre_tl, type_tl, extrait_tl, down_tl}) =>{
    const result = await bd.query(`INSERT INTO texte_lois (titre_tl, type_tl, extrait_tl, down_tl)
         VALUES ($1, $2, $3, $4) RETURNING *`, 
        [titre_tl, type_tl, extrait_tl, down_tl]);
    return result.rows[0];
}

exports.updateById = async (id_tl, titre_tl, type_tl, extrait_tl, down_tl) =>{
    const query = `UPDATE texte_lois SET titre_tl = $1, type_tl = $2, extrait_tl = $3, down_tl = $4 WHERE id_tl = $5 RETURNING *`;
    const value = [titre_tl, type_tl, extrait_tl, down_tl, id_tl];
    try{
        const result = await bd.query(query, value);
        return result.rows;

    }catch(err){
        throw new Error('Erreur de mise à jour : ' + err.message);
    }
}