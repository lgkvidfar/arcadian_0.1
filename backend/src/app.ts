import express from 'express';
import { connect } from 'mongoose';

const app = express();

const run = async (): Promise<void> => {
    await connect('mongodb+srv://fullstack:nioka20@cluster0.nkjni.mongodb.net/arcadian01?retryWrites=true&w=majority');
    console.log('connecting to mongoDB');
};

run()
    .then(() => console.log('connected to MongoDB'))
    .catch((err:unknown) => console.log(err));

import homeRouter from './routes/home';
import usersRouter from './routes/users';

app.use(express.json());

app.use('/api/home', homeRouter);
app.use('/api/users', usersRouter);



export default app;