const Product = require('../models/product.model');
 
 
 
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({ product: newlyCreatedProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 

module.exports.FindAllProducts =(req,res)=>{
  Product.find()
  .then(FindAll => {
    res.json({ product: FindAll })
})
.catch((err) => {
    res.json({ message: 'Something went wrong', error: err })
});}

module.exports.FindOneProduct=(req,res)=>{
Product.findOne({ _id: req.params.productId })
.then(OneProduct => {
    res.json({ OneProduct })
})
.catch((err) => {
    res.json({ message: 'Something went wrong', error: err })
});}

module.exports.UpdateProduct=(req,res)=>{
Product.findOneAndUpdate({ _id: req.params.productId }, req.body, { new: true, runValidators: true })
.then(result => {
    res.json({result })
})
.catch((err) => {
    res.json(err)
})

}

module.exports.DeleteProduct=(req,res)=>{
Product.deleteOne({ _id: req.params.productId })
.then(del => {
    res.json({ "done": del })
})
.catch((err) => {
    res.json(err)
})



}



