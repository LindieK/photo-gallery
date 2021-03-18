const express = require('express');
const app = express();
const port = 8000;
const {MongoClient} = require('mongodb');
const {MONGOURI} = require('./keys');
const client = new MongoClient(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(require('./routes/auth'));

//attempting to make DB connection
client.connect()
.then(client => {
    console.log("MongoDB Database connected...");
    const db = client.db('photo-gallery-users');
    const usersCollection = db.collection('users');

    //======== Middleware =========

    //======== Routes ============
    
})
.catch()


app.listen(port, () => {
    console.log(`Example app listening at port ${port}`);
});