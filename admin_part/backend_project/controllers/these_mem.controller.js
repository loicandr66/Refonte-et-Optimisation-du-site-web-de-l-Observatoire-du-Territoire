const tm = require('../models/these_mem.model');

exports.findAll = async (req, res) =>{
    try{
        const findAllTm = await tm.getAll();
        res.json(findAllTm);
    } catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.findByColumnValue = async(req, res) =>{
    const {column, value} = req.params;
    try{
        
        const findOneTm = await tm.getByColumnValue(column, value);
        res.json(findOneTm);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

exports.remove = async (req, res) =>{
    try{
        const {id} = req.params;
        await tm.deleteById(id);
        res.json({ message: `Produit avec ID ${id} supprimé.` });
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}


exports.addThese = async (req, res) => {
    try{
        const {type_tm, nom_tm, but_tm, section_tm, auteur_tm, promotion, extrait_tm, down_tm} = req.body;
        if (!nom_tm || !type_tm) {
            return res.status(400).json({ error: 'Champs requis manquants' });
        }
        const addOneThese = await tm.addOne({type_tm, nom_tm, but_tm, section_tm, auteur_tm, promotion, extrait_tm, down_tm});
        
        res.json(addOneThese);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.modifyThese = async (req, res) =>{
    try{
        const id = req.params.id;
        const {type_tm, nom_tm, but_tm, section_tm, auteur_tm, promotion, extrait_tm, down_tm} = req.body;
        await tm.updateById(id, type_tm, nom_tm, but_tm, section_tm, auteur_tm, promotion, extrait_tm, down_tm);
        res.status(200).json({ message: 'Mise à jour réussie' });
    } catch{
        console.error('Erreur updatePlan:', error);
        res.status(500).json({ error: 'Erreur lors de la mise à jour' });
    }
}



