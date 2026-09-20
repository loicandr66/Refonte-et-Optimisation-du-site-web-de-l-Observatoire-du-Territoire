const tl = require('../models/texte_loi.model');

exports.findAll = async (req, res) =>{
    try{
        const findAllTl = await tl.getAll();
        res.json(findAllTl);
    } catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.findByColumnValue = async(req, res) =>{
    const {column, value} = req.params;
    try{
        
        const findOneTl = await tl.getByColumnValue(column, value);
        res.json(findOneTl);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

exports.remove = async (req, res) =>{
    try{
        const {id} = req.params;
        await tl.deleteById(id);
        res.json({ message: `Produit avec ID ${id} supprimé.` });
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

exports.addLoi = async (req, res) => {
    try{
        const {titre_tl, type_tl, extrait_tl, down_tl} = req.body;
        if (!titre_tl || !extrait_tl || !down_tl) {
            return res.status(400).json({ error: 'Champs requis manquants' });
        }
        const addOneLoi = await tl.addOne({titre_tl, type_tl, extrait_tl, down_tl});
        
        res.json(addOneLoi);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.modifyLoi = async (req, res) =>{
    try{
        const id = req.params.id;
        const {titre_tl, type_tl, extrait_tl, down_tl} = req.body;
        await tl.updateById(id, titre_tl, type_tl, extrait_tl, down_tl);
        res.status(200).json({ message: 'Mise à jour réussie' });
    } catch{
        console.error('Erreur updatePlan:', error);
        res.status(500).json({ error: 'Erreur lors de la mise à jour' });
    }
}

