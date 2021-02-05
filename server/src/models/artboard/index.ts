import { model, Schema } from 'mongoose';

const artboardSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    pageId: {
        type: Number,
        required: true,
    },
});

export const Artboard = model('Artboard', artboardSchema);
