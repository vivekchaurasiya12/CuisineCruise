import express from "express"
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contact');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api', contactRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});