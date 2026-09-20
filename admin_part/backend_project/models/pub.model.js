const bd = require('../bd');
const format = require('pg-format');

//récupérer toutes les données de la table
exports.getAll = async () => {
    const result = await bd.query('SELECT * FROM publications');
    return result.rows;
};

//récupérer des données en triant les colonnes(certaine valeurs de colonnes en particulier)
exports.getByColumnValue = async (column, value) =>{
    const allowed_column = ['id_pub','titre_pub', 'date_pub', 'cat_pub'];
    if (!allowed_column.includes(column)){
        throw new Error('Colonne non autorisée');
    }
    const query = format(`SELECT * FROM publications WHERE %I = $1`, column);
    const result = await bd.query(query, [value]);
    return result.rows;
}



//supprimer des données
exports.deleteById = async (id) =>{
    const result = await bd.query(`DELETE FROM publications WHERE id_pub = $1 RETURNING *`, [id]);
    return result.rows;
}

exports.addOne = async ({titre_pub, contenu_pub, date_pub, cat_pub, img_pub}) =>{
    const result = await bd.query(`INSERT INTO publications (titre_pub, contenu_pub, date_pub, cat_pub, img_pub)
         VALUES ($1, $2, $3, $4, $5) RETURNING *`, 
        [titre_pub, contenu_pub, date_pub, cat_pub, img_pub]);
    return result.rows[0];
}

exports.updateById = async (id_pub, titre_pub, contenu_pub, date_pub, cat_pub, img_pub) =>{
    const query = `UPDATE publications SET titre_pub = $1, contenu_pub = $2, date_pub = $3, cat_pub = $4, img_pub = $5 WHERE id_pub = $6 RETURNING *`;
    const value = [titre_pub, contenu_pub, date_pub, cat_pub, img_pub, id_pub];
    try{
        const result = await bd.query(query, value);
        return result.rows;

    }catch(err){
        throw new Error('Erreur de mise à jour : ' + err.message);
    }
}