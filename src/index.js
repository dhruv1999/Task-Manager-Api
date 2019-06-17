const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const jwt=require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const app = express()
const port = process.env.PORT || 3000


// app.use((req,res,next)=>{

// 	if(req.method === 'GET'){
// 		res.send('GET ARE disabled')
// 	}else{
// 		next()
// 	}


	
// })



// app.use((req,res,next)=>{
// 	res.status(503).send('site is currently down check back soon')
// })



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



const Task=require('./models/task')
const User =require('./models/user')


const main =async()=>{
	// const task = await Task.findById('5d063a19ba182512c005e46e')
	// await task.populate('owner').execPopulate()
	// console.log(task.owner)


	const user = await User.findById('5d0639b2ba182512c005e46b')
	await user.populate('tasks').execPopulate()
	console.log(user.tasks)

}

main()