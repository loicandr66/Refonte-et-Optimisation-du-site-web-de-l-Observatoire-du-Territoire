const stats = require('../models/stats.model');

exports.findAll = async (req, res) =>{
    try{
        const findAllStats = await stats.getAll();
        res.json(findAllStats);
    } catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.findByColumnValue = async(req, res) =>{
    const {column, value} = req.params;
    try{
        
        const findOneStat = await stats.getByColumnValue(column, value);
        res.json(findOneStat);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

exports.remove = async (req, res) =>{
    try{
        const {id} = req.params;
        await stats.deleteById(id);
        res.json({ message: `Produit avec ID ${id} supprimé.` });
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

exports.addStats = async (req, res) => {
    try{
        const {nom_stats, type_stats, statut_stats, invest_stats} = req.body;
        if (!nom_stats || !type_stats || !statut_stats) {
            return res.status(400).json({ error: 'Champs requis manquants' });
        }
        const addOneStat = await stats.addOne({nom_stats, type_stats, statut_stats, invest_stats});
        
        res.json(addOneStat);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.modifyStat = async (req, res) =>{
    try{
        const {id_stats, nom_stats, type_stats, statut_stats, invest_stats} = req.body;
        await stats.updateById(id_stats, nom_stats, type_stats, statut_stats, invest_stats);
        res.status(200).json({ message: 'Mise à jour réussie' });
    } catch{
        console.error('Erreur updatePlan:', error);
        res.status(500).json({ error: 'Erreur lors de la mise à jour' });
    }
}




