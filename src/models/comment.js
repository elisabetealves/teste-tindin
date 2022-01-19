import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
    id_class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'classes'
    }, 
    comment: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        required: true,
        default: new Date
    }
})

export default mongoose.model('comment', commentSchema)