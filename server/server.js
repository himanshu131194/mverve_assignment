import config from '../config'
import app from './express'

import mongoose from 'mongoose'
mongoose.Promise = global.Promise
mongoose.connect(config.mongoURI, { useNewUrlParser: true });

mongoose.connection.on('error', ()=>{
	 throw new Error('unable to connect to database')
})

app.listen(config.port, (err)=>{
	if(err) 
	   console.log(err);
	console.log("server is running on port %s", config.port);	
})