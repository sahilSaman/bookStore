const express=require('express')
const moongose=require('mongoose')
const userRouter=require('./Routes/userRouter')
const app=express()
const port =9001
const db="mongodb://192.168.5.57:27017/natours-s";
app.use(express.json());
moongose.set('strictQuery',true)
moongose.connect(db).then(
    console.log("connected")
)
app.use('/user',userRouter)
app.listen(port, () => console.log(`App listening on port ${port}`));