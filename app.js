const express = require('express');
const userRouter = require('./routes/user.routes')
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectToDB = require('./config/db');
connectToDB();
const cookieParser = require('cookie-parser')
const indexRouter = require('./routes/index.routes')

app.set('view engine', 'ejs');
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/user', userRouter)
app.use('/', indexRouter)



app.listen(3000, () => {
    console.log('server running on port 3000')
})