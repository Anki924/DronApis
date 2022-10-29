const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 3000;
const ProductsData = require("./DATA/Products.json");

app.get("/" , (req , res) => {
    res.send("Drone APIs server");
});

app.get("/products" , (req , res) => {
    res.send(ProductsData);
});

app.listen(port , () =>{
    console.log("listen");
})