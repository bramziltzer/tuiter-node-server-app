import mongoose from 'mongoose';
const schema = mongoose.Schema({
    userName: String,
    handle: String,
    avatarIcon: String,
    topic: String,
    time: String,
    replies: Number,
    retuits: Number,
    tuit: String,
    likes: Number,
    liked: Boolean,
}, {collection: 'tuits'});
export default schema;