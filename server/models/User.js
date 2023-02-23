import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: false,
    },
    subscribers: {
        type: Number,
        default: 0,
    },
    subscribedChannels: {
        type: Number,
        default: 0,
    },
    subscribersUsers: {
        type: [String],
    },
},
    {
        timestamps: true,
    });

const User = mongoose.model('User', userSchema);

export default User;
