const bd = require('../bd');
const format = require('pg-format');

//récupérer toutes les données de la table
exports.getAll = async () => {
    const result = await bd.query('SELECT * FROM these_mem');
    return result.rows;
};

//récupérer des données en triant les colonnes(certaine valeurs de colonnes en particulier)
exports.getByColumnValue = async (column, value) =>{
    const allowed_column = ['nom_tm', 'type_tm', 'auteur_tm', 'promotion', 'but_tm', 'section_tm'];
    if (!allowed_column.includes(column)){
        throw new Error('Colonne non autorisée');
    }
    const query = format(`SELECT * FROM these_mem WHERE %I = $1`, column);
    const result = await bd.query(query, [value]);
    return result.rows;
}


//supprimer des données
exports.deleteById = async (id) =>{
    const result = await bd.query(`DELETE FROM these_mem WHERE id_tm = $1 RETURNING *`, [id]);
    return result.rows;
}

exports.addOne = async ({type_tm, nom_tm, but_tm, section_tm, auteur_tm, promotion, extrait_tm, down_tm}) =>{
    const result = await bd.query(`INSERT INTO these_mem (type_tm, nom_tm, but_tm, section_tm, auteur_tm, promotion, extrait_tm, down_tm)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`, 
        [type_tm, nom_tm, but_tm, section_tm, auteur_tm, promotion, extrait_tm, down_tm]);
    return result.rows[0];
}

exports.updateById = async (id_tm, type_tm, nom_tm, but_tm, section_tm, auteur_tm, promotion, extrait_tm, down_tm) =>{
    const query = `UPDATE these_mem SET type_tm = $1, nom_tm = $2, but_tm = $3, section_tm = $4, auteur_tm = $5, promotion = $6, extrait_tm = $7, down_tm = $8 WHERE id_tm = $9 RETURNING *`;
    const value = [type_tm, nom_tm, but_tm, section_tm, auteur_tm, promotion, extrait_tm, down_tm, id_tm];
    try{
        const result = await bd.query(query, value);
        return result.rows;

    }catch(err){
        throw new Error('Erreur de mise à jour : ' + err.message);
    }
}