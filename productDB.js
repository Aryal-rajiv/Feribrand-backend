require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./model/product");

const ProductJson = require("./products.json");

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("I am working");
    }catch(error){
        console.log(error);
    }
}

start();