const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
let productsJson = require('./products.json');
let siteConfigJson = require('./site-configs.json');
const app = express()
const port = 8080
const fs = require('fs');
const path = require("path");


app.use(express.static(path.join(__dirname,"..", "build")));
app.use(bodyParser.json()); 
app.use(cors())

//Basically three routes to all do the same thing the routing is mostly handled by react
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"..", "build", "index.html"));
});

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname,"..", "build", "index.html"));
})

app.get('/products/:id', (req, res) => {
    res.sendFile(path.join(__dirname,"..", "build", "index.html"));
})

// using popst to "overload" the products route
app.post('/products', (req, res) => {
    console.log("Get Products")
    res.send(
        {products : productsJson}
    );
})

app.get('/product/:id', (req, res) => {
    console.log("Get Product", req.params.id);
    let desiredProduct = null;
    for(let product of productsJson){
        if(product.id === req.params.id){
            desiredProduct = product;
            break;
        }
    }
    res.send(
        {product : desiredProduct}
    );
})

app.delete('/product/:id', (req, res) => {
    console.log("Delete Product", req.params.id);
    for(let i = 0; i < productsJson.length; i++){
        if(productsJson[i].id === req.params.id){
            productsJson.splice(i,1);
            break;
        }
    }
    console.log(productsJson.length);
    let data = JSON.stringify(productsJson);
    fs.writeFileSync('express/products.json', data);

    res.send(
        "SUCCESS"
    );
})

app.put('/product', (req, res) => {
    console.log("Add Product", req.body);
    productsJson.push(req.body)

    let data = JSON.stringify(productsJson);
    fs.writeFileSync('express/products.json', data);

    res.send(
        "SUCCESS"
    );
})


//config 
app.get('/config/:id', (req, res) => {
    console.log("Get Config", req.params.id);
    let desiredConfig = null;
    for(let config of siteConfigJson){
        if(config.id === parseInt(req.params.id)){
            desiredConfig = config;
            break;
        }
    }
    res.send(
        {siteConfig : desiredConfig}
    );
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})