import express, {Express, Request, Response} from 'express'

export const app: Express = express();

app.get('/hello', (_req: Request, res: Response) => {
    res.send('world');
})

export const server = app.listen(3000, () => {
    console.log('Server listening port 3000...');
})