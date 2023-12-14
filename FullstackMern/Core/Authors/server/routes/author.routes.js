const AuthorController = require('../controllers/author.controller')


module.exports = app =>{
app.get('/api/authors', AuthorController.FindAuthors);
app.get('/api/authors/:AuthorId', AuthorController.FindOneAuthor);
app.patch('/api/authors/:AuthorId', AuthorController.UpdateAuthor);
app.post('/api/authors', AuthorController.CreateNewAuthor);
app.delete('/api/authors/:AuthorId', AuthorController.DeleteAuthor);

}


