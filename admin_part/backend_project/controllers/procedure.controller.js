const proc = require('../models/procedure.model');

exports.findAll = async (req, res) =>{
    try{
        const findAllProc = await proc.getAll();
        res.json(findAllProc);
    } catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.findByColumnValue = async(req, res) =>{
    const {column, value} = req.params;
    try{
        
        const findOneProc = await proc.getByColumnValue(column, value);
        res.json(findOneProc);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

exports.remove = async (req, res) =>{
    try{
        const {id} = req.params;
        await proc.deleteById(id);
        res.json({ message: `Produit avec ID ${id} supprimé.` });
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

exports.addProc = async (req, res) => {
    try{
        const {nom_procedure, type_procedure, consult_procedure, down_procedure} = req.body;
        if (!nom_procedure || !type_procedure || !consult_procedure || !down_procedure) {
            return res.status(400).json({ error: 'Champs requis manquants' });
        }
        const addOneProc = await proc.addOne({nom_procedure, type_procedure, consult_procedure, down_procedure});
        
        res.json(addOneProc);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.modifyProc = async (req, res) =>{
    try{
        const id = req.params.id;
        const {nom_procedure, type_procedure, consult_procedure, down_procedure} = req.body;
        await proc.updateById(id, nom_procedure, type_procedure, consult_procedure, down_procedure);
        res.status(200).json({ message: 'Mise à jour réussie' });
    } catch{
        console.error('Erreur updatePlan:', error);
        res.status(500).json({ error: 'Erreur lors de la mise à jour' });
    }
}




