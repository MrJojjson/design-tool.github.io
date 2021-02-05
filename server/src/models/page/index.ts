import { model, Schema } from 'mongoose';

export const pageSchema = new Schema({
    title: String,
    id: Number,
});

export const Page = model('Page', pageSchema);
