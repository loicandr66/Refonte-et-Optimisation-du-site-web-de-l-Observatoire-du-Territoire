const bd = require('../bd');
const format = require('pg-format');

//récupérer toutes les données de la table
exports.getAll = async () => {
    const result = await bd.query('SELECT * FROM schemas_reg');
    return result.rows;
};

//récupérer des données en triant les colonnes(certaine valeurs de colonnes en particulier)
exports.getByColumnValue = async (column, value) =>{
    const allowed_column = ['id_schema','type_schema', 'schema_region', 'schema_district', 'schema_commune'];
    if (!allowed_column.includes(column)){
        throw new Error('Colonne non autorisée');
    }
    const query = format(`SELECT * FROM schemas_reg WHERE %I = $1`, column);
    const result = await bd.query(query, [value]);
    return result.rows;
}


//supprimer des données
exports.deleteById = async (id) =>{
    const result = await bd.query(`DELETE FROM schemas_reg WHERE id_schema = $1 RETURNING *`, [id]);
    return result.rows;
}

exports.addOne = async ({type_schema, schema_region, schema_district, schema_commune, schema_carte, schema_rapport}) =>{
    const result = await bd.query(`INSERT INTO schemas_reg (type_schema, schema_region, schema_district, schema_commune, schema_carte, schema_rapport)
         VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, 
        [type_schema, schema_region, schema_district, schema_commune, schema_carte, schema_rapport]);
    return result.rows[0];
}

exports.updateById = async (id_schema, type_schema, schema_region, schema_district, schema_commune, schema_carte, schema_rapport) =>{
    const query = `UPDATE schemas_reg SET type_schema = $1, schema_region = $2, schema_district = $3, schema_commune = $4, schema_carte = $5, schema_rapport = $6 WHERE id_schema = $7 RETURNING *`;
    const value = [type_schema, schema_region, schema_district, schema_commune, schema_carte, schema_rapport, id_schema];
    try{
        const result = await bd.query(query, value);
        return result.rows;

    }catch(err){
        throw new Error('Erreur de mise à jour : ' + err.message);
    }
}