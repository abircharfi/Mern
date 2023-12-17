const Player = require('../models/player.model')


module.exports.CreateNewPlayer=(req,res)=>{
Player.create(req.body)
.then(NewPlayer=>{
    res.json({Player : NewPlayer})
})
.catch(err => res.status(400).json(err))


}


module.exports.FindPlayers=(req,res)=>{
    Player.find()
 .then(FindAll=>{
    res.json(FindAll)
})
.catch(err => res.status(400).json(err))


}


module.exports.DeletePlayer=(req,res)=>{
    Player.deleteOne({_id:req.params.PlayerId})
    .then(DeleteOne=>{
        res.json(DeleteOne)
    })
    .catch(err => res.status(400).json(err))
    
    
    }

