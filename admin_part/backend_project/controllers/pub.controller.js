const pub = require('../models/pub.model');

exports.findAll = async (req, res) =>{
    try{
        const findAllPub = await pub.getAll();
        res.json(findAllPub);
    } catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.findByColumnValue = async(req, res) =>{
    const {column, value} = req.params;
    try{
        
        const findOnePub = await pub.getByColumnValue(column, value);
        res.json(findOnePub);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

exports.remove = async (req, res) =>{
    try{
        const {id} = req.params;
        await pub.deleteById(id);
        res.json({ message: `Produit avec ID ${id} supprimé.` });
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

exports.addPub = async (req, res) => {
    try{
        const {titre_pub, contenu_pub, date_pub, cat_pub, img_pub} = req.body;
        if (!titre_pub || !contenu_pub || !date_pub) {
            return res.status(400).json({ error: 'Champs requis manquants' });
        }
        const addOnePub = await pub.addOne({titre_pub, contenu_pub, date_pub, cat_pub, img_pub});
        
        res.json(addOnePub);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.modifyPub = async (req, res) =>{
    try{
        
        const {id_pub,titre_pub, contenu_pub, date_pub, cat_pub, img_pub} = req.body;
        await pub.updateById(id_pub, titre_pub, contenu_pub, date_pub, cat_pub, img_pub);
        res.status(200).json({ message: 'Mise à jour réussie' });
    } catch{
        console.error('Erreur updatePlan:', error);
        res.status(500).json({ error: 'Erreur lors de la mise à jour' });
    }
}



