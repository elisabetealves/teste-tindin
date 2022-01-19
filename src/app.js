import express from 'express'
const app = express()
import cors from 'cors'
import index from './routes/index'
import classes from './routes/classesRoutes'
import user from './routes/userRoutes'
import comments from './routes/commentsRoutes'
import  swaggerUi  from 'swagger-ui-express' 
import  swaggerDocument from './swagger.json'

import db from './data/database'
db.connect()

app.use(cors())
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument) ) ;

app.use('/', index)
app.use('/user', user)
app.use('/classes', classes)
app.use('/classes', comments)

app.get('/terms', (req, res) => {
    return res.json({message : 'Termo de Serviços'})
})

export default app