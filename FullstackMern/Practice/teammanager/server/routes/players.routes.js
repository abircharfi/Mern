const PlayerController = require('../controllers/player.controller')


module.exports = app =>{
app.get('/api/players/list', PlayerController.FindPlayers);
app.post('/api/players/addplayer', PlayerController.CreateNewPlayer);
app.delete('/api/players/list/:PlayerId', PlayerController.DeletePlayer);

}



