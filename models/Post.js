import mongoose, { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
    title: {
        type: String,
        required: [true, "Error type"]
    },
    body: {
        type: String,
        required: [true, "Error type"]
    },
    id: {
        type: String,
        required: [true, "Error type"]
    }

})

models = {};

export default models.Post || model("Post", PostSchema);