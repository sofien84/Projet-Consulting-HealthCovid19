const express = require ('express')
const connectDB = require('./config/connectDB.js')
const userrouter = require('./router/user')
const messagerouter = require('./router/message')
const documentsDrsrouter = require('./router/documentsDrs')
const app = express()
app.use (express.json())




const port = process.env.PORT ||5000
app.use('/api/user', userrouter)
app.use('/api/message', messagerouter)
app.use('/api/documentsDrs', documentsDrsrouter)
connectDB()


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}




app.listen (port, (err) => {
    (err) ? console.log(err): console.log(`server is running on port ${port}`)
})


