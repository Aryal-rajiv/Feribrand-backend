const { LEGAL_TCP_SOCKET_OPTIONS } = require("mongodb");
const Product = require("../model/product");

const getAllProducts = async (req, res) => {

    const {company, name, featured, sort, select } = req.query;
    const queryObject = {};

    if (company){
        queryObject.company = company;
    }

    if (name){
        queryObject.name = {  $regex: name, $options: "i"};
    }

    if (featured){
      queryObject.featured = featured;
    }

    let apiData = Product.find(queryObject);

    if (sort){
        let sortfix = sort.replace(",", " ");
        apiData = apiData.sort(sortfix);
    }
     
    if (select){
    
        let selectfix = select.split(",").join(" ");
        apiData = apiData.select(selectfix);
    }
 
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 8;
    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    console.log(queryObject);

    const myData = await apiData;
    res.status(200).json({ myData, nbHits:myData.length })

};

const getAllProductsTesting = async(req, res) => {
    const myData = await Product.find(req.query);
    res.status(200).json({ myData, nbHits:myData.length });
};

module.exports = {getAllProducts, getAllProductsTesting};
