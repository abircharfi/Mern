const Author = require('../models/author.model')


module.exports.CreateNewAuthor=(req,res)=>{
Author.create(req.body)
.then(NewAuthor=>{
    res.json({Author : NewAuthor})
})
.catch(err => res.status(400).json(err))


}


module.exports.FindAuthors=(req,res)=>{
 Author.find()
 .then(FindAllAuthor=>{
    res.json(FindAllAuthor)
})
.catch(err => res.status(400).json(err))


}

module.exports.FindOneAuthor=(req,res)=>{

    Author.findOne({_id:req.params.AuthorId})
    .then(OneAuthor=>{
        res.json(OneAuthor)
    })
    .catch(err => res.status(400).json(err))
    
    }

module.exports.DeleteAuthor=(req,res)=>{
    Author.deleteOne({_id:req.params.AuthorId})
    .then(DeleteOne=>{
        res.json(DeleteOne)
    })
    .catch(err => res.status(400).json(err))
    
    
    }

module.exports.UpdateAuthor=(req,res)=>{
    Author.findOneAndUpdate({_id :req.params.AuthorId},req.body ,{ new: true, runValidators: true })

    .then(UpdateOne=>{
        res.json(UpdateOne)
    })
    .catch(err => res.status(400).json(err))
    
    
    }
