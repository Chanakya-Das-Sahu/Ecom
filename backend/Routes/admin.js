const express = require('express')
const router = express.Router();
const product = require('../Models/product')

router.post('/listProduct',async(req,res)=>{
    //   const {name , image , dis , images , amt } = req.body ;
    //   const newProduct = product({
    //     name , image , dis , images , amt
    //   })
    // //   await product.create({productDetails})
    //  await newProduct.save()
    const Product = req.body ;
    await product.create(Product) ;
    res.json({msg:'saved'})
})

module.exports = router ;