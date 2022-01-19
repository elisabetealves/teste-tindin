import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

const connect = () => {
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log('Mongo db conectado com sucesso'))
    .catch(err => console.error)
}

export default { connect }

