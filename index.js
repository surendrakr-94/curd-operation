
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes/routes');


mongoose.connect("mongodb+srv://mohandas:NRKPqMnZIgB5IRW9@cluster0.ktzzu7c.mongodb.net/test", {
    useNewUrlParser: true
})
    .then(() => console.log("mongoDb is connected"))
    .catch(err => console.log(err))




const app = express();

app.use(express.json());
app.use('/api/users', routes)


app.listen(3100, () => {
    console.log(`Server Started at ${3100}`)
})