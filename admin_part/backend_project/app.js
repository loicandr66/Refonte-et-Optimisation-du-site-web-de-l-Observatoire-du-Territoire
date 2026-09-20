const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const planRouter = require('./routes/plan_urb.routes');
const procedureRouter = require('./routes/procedure.routes');
const publicationRouter = require('./routes/pub.routes');
const schemaRouter = require('./routes/schema.routes');
const statistiquesRouter = require('./routes/stats.routes');
const texte_loisRouter = require('./routes/texte_lois.routes');
const these_memoireRouter = require('./routes/these_mem.routes');
const adminRoutes = require('./routes/admin.routes')



app.use(express.json());


app.use('/api/plans', planRouter);
app.use('/api/procedures', procedureRouter);
app.use('/api/publications', publicationRouter);
app.use('/api/schemas', schemaRouter);
app.use('/api/statistiques', statistiquesRouter);
app.use('/api/texte_lois', texte_loisRouter);
app.use('/api/these_memoire', these_memoireRouter);
app.use('/api/administrateurs', adminRoutes);


app.get('/', (req,res) => {
  res.send('Serveur et API en écoute');
});

module.exports = app;
