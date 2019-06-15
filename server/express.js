import express from 'express'
import bodyParser from 'body-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import admin from './routes/admin.route'

const app = express();

app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(bodyParser.json({limit: '10mb', extended: true}))

app.use(compress());
app.use(cors());
app.use(helmet());

app.use('/api', admin);


app.get('/', (req, res)=>{
	 res.send({
	 	 key: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nihil minima deserunt magni, deleniti beatae consectetur illum blanditiis, veniam quaerat accusantium! Iste praesentium saepe vitae voluptas nostrum quidem reiciendis provident?"
	 })
})

export default app;
