const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json(), express.urlencoded({ extended: true }), cors());
require("dotenv").config()

require ("./config/mongoose.config.js")


const port = process.env.PORT

const Routes = require('./routes/product.route.js')

Routes(app)

app.listen(port,()=>{console.log('The server listening on port'+port)})