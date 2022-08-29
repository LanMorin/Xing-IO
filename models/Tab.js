import mongoose, { Schema, model, models } from 'mongoose';

const TabSchema = new Schema({
    title: {
        type: String,
        required: [true, "Error type"]
    },
    id: {
        type: String,
        required: [true, "Error type"]
    },
    submenu: {
        type: Array,
        required: [true, "Error type"]
    }

})

models = {};

export default models.Tab || model("Tab", TabSchema);