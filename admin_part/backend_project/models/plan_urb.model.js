const bd = require('../bd');
const format = require('pg-format');

//récupérer toutes les données de la table
exports.getAll = async () => {
    const result = await bd.query('SELECT * FROM plan_urbanisme');
    return result.rows;
};

//récupérer des données en triant les colonnes(certaine valeurs de colonnes en particulier)
exports.getByColumnValue = async (column, value) =>{
    const allowed_column = ['id_plan', 'plan_region', 'plan_district', 'plan_commune', 'plan_pude', 'plan_type'];
    if (!allowed_column.includes(column)){
        throw new Error('Colonne non autorisée');
    }
    const query = format(`SELECT * FROM plan_urbanisme WHERE %I = $1`, column);
    const result = await bd.query(query, [value]);
    return result.rows;
}

//ajout d'une donnée
exports.addOne = async ({plan_region, plan_district, plan_commune, plan_pude, plan_carte, plan_rapport, plan_type}) =>{
    const result = await bd.query(`INSERT INTO plan_urbanisme 
                                    (plan_region, plan_district, plan_commune, plan_pude, plan_carte, plan_rapport, plan_type)
                                    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, 
        [plan_region, plan_district, plan_commune, plan_pude, plan_carte, plan_rapport, plan_type]);
    return result.rows[0];
}

//suppression d'une donnée
exports.deleteById = async (id) =>{
    const result = await bd.query(`DELETE FROM plan_urbanisme WHERE id_plan = $1 RETURNING *`, [id]);
    return result.rows;
}

//modification / mise-à-jour dune donnée
exports.updateById = async (id_plan, plan_region, plan_district, plan_commune, plan_pude, plan_carte, plan_rapport, plan_type) =>{
    const query = `UPDATE plan_urbanisme 
                    SET plan_region = $1, 
                    plan_district = $2, 
                    plan_commune = $3, 
                    plan_pude = $4, 
                    plan_carte = $5, 
                    plan_rapport= $6, 
                    plan_type = $7 
                    WHERE id_plan = $8
                    RETURNING *`;
    const value = [plan_region, plan_district, plan_commune, plan_pude, plan_carte, plan_rapport, plan_type, id_plan];
    try{
        const result = await bd.query(query, value);
        return result.rows;

    }catch(err){
        throw new Error('Erreur de mise à jour : ' + err.message);
    }
}