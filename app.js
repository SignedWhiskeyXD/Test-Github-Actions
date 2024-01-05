import express from 'express'

export const app = express();

app.get('/hello', (req, res) => {
    res.send('world');
})

export const server = app.listen(3000, () => {
    console.log('Server listening port 3000...');
})