const express = require('express')
const app = new express();
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3500;
const path = require('path');

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use(cors())
app.use(logger('dev'))

require('./middleware/mongodb') //to init mongoDB

app.use('/uploads', express.static(path.join(__dirname +'/uploads')));

const api = require('./routes/api')
app.use('/api',api)







app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`)
})
