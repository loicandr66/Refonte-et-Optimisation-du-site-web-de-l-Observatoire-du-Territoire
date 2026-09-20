const schema = require('../models/schema.model');

exports.findAll = async (req, res) =>{
    try{
        const findAllSchemas = await schema.getAll();
        res.json(findAllSchemas);
    } catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.findByColumnValue = async(req, res) =>{
    const {column, value} = req.params;
    try{
        
        const findOneSchema = await schema.getByColumnValue(column, value);
        res.json(findOneSchema);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

exports.remove = async (req, res) =>{
    try{
        const {id} = req.params;
        await schema.deleteById(id);
        res.json({ message: `Produit avec ID ${id} supprimé.` });
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

exports.addSchema = async (req, res) => {
    try{
        const {type_schema, schema_region, schema_district, schema_commune, schema_carte, schema_rapport} = req.body;
        if (!schema_region || !type_schema || !schema_carte || !schema_rapport) {
            return res.status(400).json({ error: 'Champs requis manquants' });
        }
        const addOneSchema = await schema.addOne({type_schema, schema_region, schema_district, schema_commune, schema_carte, schema_rapport});
        
        res.json(addOneSchema);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.modifySchema = async (req, res) =>{
    try{
        
        const {id_schema, type_schema, schema_region, schema_district, schema_commune, schema_carte, schema_rapport} = req.body;
        await schema.updateById(id_schema, type_schema, schema_region, schema_district, schema_commune, schema_carte, schema_rapport);
        res.status(200).json({ message: 'Mise à jour réussie' });
    } catch{
        console.error('Erreur updatePlan:', error);
        res.status(500).json({ error: 'Erreur lors de la mise à jour' });
    }
}
