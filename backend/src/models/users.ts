import { Schema, model } from 'mongoose';
import { NewUserEntry } from '../types';

const schema = new Schema<NewUserEntry>({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true},
    name: {type: String, required: true, unique: false},
    email: {type: String, required: true, unique: true},
});


const UserModel = model<NewUserEntry>('User', schema);

export default UserModel;