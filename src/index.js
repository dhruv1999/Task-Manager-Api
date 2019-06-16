const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const jwt=require('jsonwebtoken')


const app = express()
const port = process.env.PORT || 3000


// app.use((req,res,next)=>{

// 	if(req.method === 'GET'){
// 		res.send('GET ARE disabled')
// 	}else{
// 		next()
// 	}


	
// })



app.use((req,res,next)=>{
	res.status(503).send('site is currently down check back soon')
})



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const bcrypt = require('bcryptjs')

const myfunction=async()=>{
	const token=jwt.sign({_id:'abc123'},'thisismynewcourse',{expiresIn:'1 seconds'})
	console.log(token)

	const data=jwt.verify(token,'thisismynewcourse')
	console.log(data)

}
myfunction()