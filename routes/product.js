const POLARDBconnection = require("../POLARDB.config.js");
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const Product = require("../models/Product");
const { verfyTokenAndAuthorization, verfyToken , verfyTokenAndAdmin } = require("./verifyToken")

//CREATE

const addProduct = (req, res)=>{

    const title = req.body.title;
    const descr = req.body.desc;
    const img = req.body.img;
    const categories = req.body.categories;
    const region = req.body.region;
    const specifications = req.body.specifications;
    const highlights = req.body.highlights;
    const price = req.body.price;
    const sellerId = req.body.sellerId;
   
    const SQL = `INSERT INTO products 
    (title, descr, img, categories, region, specifications, highlights, price, sellerId) 
    VALUES 
    ("${title}", "${descr}", "${img}", "${categories}","${region}" ,"${specifications}", "${highlights}", "${price}", "${sellerId}")`;
    POLARDBconnection.query(SQL, (error, results) => {
        if (error) throw error;
        console.log("1 record inserted");
    });
  
}


router.post("/", verfyTokenAndAuthorization ,async (req,res)=>{
    
    console.log(req.body)

    // const newProduct = new Product(req.body)

    try {

        addProduct(req, res);
        res.status(201).json("Product has been added");
        // const savedProduct = await newProduct.save();
        // res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
})




//UPDATE
router.put("/:id", verfyTokenAndAuthorization, async (req,res)=>{
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
            $set : req.body
        },
        { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
});

//DElETE 

router.delete("/:id", verfyTokenAndAuthorization , async (req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id)

        res.status(200).json("Product has been deleted");   
    } catch (error) {
        res.send(500).json(error);
    }
})

//GET PRODUCT

router.get("/find/:id" , async (req,res)=>{
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product); 
    } catch (error) {
        res.send(500).json(error);
    }
})

//GET ALL PRODUCTS

router.get("/" , async (req,res)=>{
    const qNew = req.query.new; 
    const qCategory = req.query.category; 
    try {
        let products;

        if(qNew){
            products = await Product.find().sort({ createdAt : -1 }.limit(5));
        }else if(qCategory){

                products = await Product.find({categories : { $in: [qCategory] },

            });
        }else{
            products = await Product.find();
        }

        res.status(200).json(products); 
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;