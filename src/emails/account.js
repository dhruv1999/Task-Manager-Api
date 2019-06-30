const sgMail=require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
	sgMail.send({
		to:email,
		from:'dhruvparmar160@gmail.com',
		subject:'Thanks for joining in!',
		text:`Welcome to the app , ${name}. Let me know how you get along with the app`
	})
}

const sendCancelEmail =(email,name)=>{
	sgMail.send({
		to:email,
		from:'dhruvparmar160@gmail.com',
		subject:'Thanks for joining in!',
		text:`GoodBye ${name}. See you soon`
	})
}


module.exports={
	sendWelcomeEmail,
	sendCancelEmail
}