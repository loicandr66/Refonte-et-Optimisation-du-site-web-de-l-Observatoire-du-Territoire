const plan = require('../models/plan_urb.model');

exports.findAll = async (req, res) =>{
    try{
        const findAllPlans = await plan.getAll();
        res.json(findAllPlans);
    } catch(error){
        res.status(500).json({error: error.message});
    }
};

exports.findByColumnValue = async(req, res) =>{
    const {column, value} = req.params;
    try{
        const findOnePlan = await plan.getByColumnValue(column, value);
        res.json(findOnePlan);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

exports.remove = async (req, res) =>{
    try{
        const {id} = req.params;
        await plan.deleteById(id);
        res.json({ message: `Produit avec ID ${id} supprimé.` });
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

exports.addPlan = async (req, res) => {
    try{
        console.log("Requête d'ajout: ", req.body);
        const {plan_region, plan_district, plan_commune, plan_pude, plan_carte, plan_rapport, plan_type} = req.body;
        if (!plan_type || !plan_region || !plan_carte || !plan_rapport) {
            return res.status(400).json({ error: 'Champs requis manquants' });
        }
        const addOnePlan = await plan.addOne({plan_region, plan_district, plan_commune, plan_pude, plan_carte, plan_rapport, plan_type});
        
        res.json(addOnePlan);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.modifyPlan = async (req, res) =>{
    try{
        const {id_plan, plan_region, plan_district, plan_commune, plan_pude, plan_carte, plan_rapport, plan_type} = req.body;
        await plan.updateById(id_plan, plan_region, plan_district, plan_commune, plan_pude, plan_carte, plan_rapport, plan_type);
        res.status(200).json({ message: 'Mise à jour réussie' });
    } catch (err) {
        console.error('Erreur updatePlan:', err);
        res.status(500).json({ error: err.message });
    }
}


