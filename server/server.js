require('dotenv').config();
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');


const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env

const app = express();

massive (CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db is connected');
})

app.use( express.static( `${__dirname}/../build`) );
app.use(bodyParser.json())
app.use(express.json());

app.post(`/api/getCart`, (req, res) =>{
    console.log(req.body.cart)
    console.log('after req')
    // let cart = req.body.cart
    const db = req.app.get('db')
    db.get_cart(req.body.cart)
    .then(resp=>{
        res.status(200).send(resp)
    })
})

app.get(`/api/getAll`, (req, res) =>{
    const db = req.app.get('db')
    db.get_all_products()
    .then(resp=>{
        res.status(200).send(resp)
    })
})

app.post(`/api/setCart`, (req, res) => {
    const {id} = req.body
    // console.log(req.body.id)
    const db = req.app.get('db')
    db.set_cart(id)

})

app.listen(SERVER_PORT, () => console.log(`Listing on port ${SERVER_PORT}`))



//select * based off state