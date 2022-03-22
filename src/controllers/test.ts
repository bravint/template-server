import {Request, Response} from 'express';

export const getTest = (req: Request, res: Response) => {
    console.log(req)
    res.status(200).send('in test controller')
}