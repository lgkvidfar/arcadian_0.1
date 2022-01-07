import express, { Request, Response, Router } from 'express';
import parseNewUserEntry from '../utils/parseNewUser';
import { NewUserEntry } from '../types';
import UserModel from '../models/users';

const router: Router = express.Router();

router.get('/',  async (_req: Request, res: Response) => {
    const users = await UserModel.find({});
    res.json(users);
});

router.post('/', async (req: Request, res: Response) => {
    try{
        const newUserEntry:NewUserEntry = parseNewUserEntry(req.body);
        const user = new UserModel({
            ...newUserEntry
        });

        const savedUser = await user.save();
        res.json(savedUser);
    } catch(err:unknown) {
        let errorMessage = 'something went wrong';
        if(err instanceof Error){
            errorMessage += err.message;
        }
        res.status(400).send(errorMessage);
    }
});

router.delete('/:id',  (req: Request, res: Response) => {
    UserModel.findByIdAndRemove(req.params.id)
    .then(() => res.status(204).end())
    .catch((err) => console.log(err));
});

export default router;