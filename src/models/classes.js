import mongoose from 'mongoose'

const classesSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    likes: {
        type: Number,
        required: false,
        default: 0
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    video:{
        type: String,
        required: true
    },
    data_init: {
        type: Date,
        required: true,
    },
    data_end: {
        type: Date,
        required: true
    },
    data_create: {
        type: Date,
        required: true,
        default: new Date
    },
    data_updated: {
        type: Date,
        required: true,
    },
    total_comments: {
        type: Number,
        required: false,
        default: 0
    }
})

export default mongoose.model('classes', classesSchema )