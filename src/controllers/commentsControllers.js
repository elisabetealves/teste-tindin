import Comments from '../models/comment'

const getAll = async(req, res) => {
    const { classes } = req

    const comment = await Comments.find({classes}).populate('classes')
    return res.status(200).send(comment)
}

const createComments = async (req, res) => {
    try {
        const { classes } = req
        
        const body = req.body
        body.classes = classes

        const comment = await Comments.create(body)
        return res.status(201).send(comment)
    } catch (error){
        return res.status(400).send({message: error.message})
    }
}

const deleteComments = async (req, res) => {
    try {
        const { id } = req.params

        await Comments.findByIdAndDelete(id)

        return res.status(204).send()
    } catch (error) {
        return res.status(404).send({ message: 'Comentário não encontrado' })
    }
}

export default {
    getAll,
    createComments,
    deleteComments,
}