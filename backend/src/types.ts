import { Document } from 'mongoose';

export interface UserEntry {
    username: string,
    password: string,
    name: string,
    email: string,
    id: string
}

export interface NewUserEntry {
    username: string,
    password: string,
    name: string,
    email: string,
}

export interface UserDocument extends Document{
    username: string,
    password: string,
    name: string,
    email: string,
    id: string
}