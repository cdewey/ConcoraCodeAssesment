const express = require('express')
const cors = require('cors')
let productsJson = require('./products.json');
const app = express()
const port = 3001
const fs = require('fs');


app.use(cors())

app.get('/products', (req, res) => {
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})