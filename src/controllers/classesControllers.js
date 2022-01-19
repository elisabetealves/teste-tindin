import mongoose from 'mongoose'
import Classes from '../models/classes'

const createClass = async(req, res) => {
    const classes = new Classes({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        video: req.body.video,
        data_init:req.body.data_init,
        data_end:req.body.data_end,
        data_update:req.body.data_updateidioma
    })

    //nao permite criar uma aula que ja existe
    const ClassesExists = await Classes.findOne({name: req.body.name})
    if(ClassesExists) {
        return res.status(409).json({error: "Aula já cadastrada!"})
    }
    
    try {
        const newClasses = await classes.save()
        return res.status(201).json(newClasses)
    }catch (err) {
        return res.status(400).json({message: error.message})
    }
}


const getAll = async (req, res) => {
    try {
        const classes = await Classes.find()
        return res.status(200).json(classes)
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
}



const getById = async (req, res) => {
    try {
        const { id } = req.params
        const classes = await Classes.findById(id)

        if (classes == undefined || id == " ") {
            return res.status(404).json({
                message: "Invalid id!"
            })
        }
        return res.status(200).json(classes)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}


const updateClass = async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body
        const update = { new: true }

        const classes = await Classes.findByIdAndUpdate(id, body, update)
        return res.status(200).send(classes)
    } catch (error) {
        return res.status(404).send({ message: 'Aula não encontrada!!!' })
    }
}


const deleteClass = async (req, res) => {
    try {
        const classes = await Classes.findById(req.params.id)

        if (classes == null) {
            return res.status(404).json({ message: " Aula não encontrado!" })
        }

        await classes.remove()
        return res.status(200).json({ message: "Aula deletado com sucesso!" })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}


const like = async (req, res) => {
    try {
        const { id } = req.params
        classes = await Classes.findById(id)

        classes.likes += 1

        await Classes.updateOne(classes)
        return res.status(200).send(classes)
    } catch (error) {
        return res.status(404).send({ message: 'Aula não encontrada' })
    }
}


const dislike = async (req, res) => {
    try {
        const { id } = req.params
        classes = await Classes.findById(id)

        classes.likes -= 1

        await Classes.updateOne(classes)
        return res.status(200).send(classes)
    } catch (error) {
        return res.status(404).send({ message: 'Aula não encontrada' })
    }
}


export default {
    getAll,
    getById,
    createClass,
    updateClass,
    deleteClass,
    like,
    dislike
}
