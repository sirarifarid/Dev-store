const express = require('express')
const app = express()
const mongoose = require('mongoose');
require('dotenv').config()
// import all routers
const productRoute = require('./routes/product')
const blogRoute = require('./routes/blog')

app.use(express.json())

// connect with Mongodb Database
mongoose.connect(process.env.MONGOURL)
.then(() => console.log('Database connected Sucessfully'))
.catch((err) => console.log(err))

//====================================
app.use('/api/product', productRoute)

app.use('/api/blog', blogRoute)

//------------------------------------
app.listen(process.env.PORT || 5000, () => {
  console.log(`app listening on port ${process.env.PORT || 5000}`)
})
