import express from 'express'

const app = express();

app.get('/hello', (req, res) => {
    res.send('world');
})

app.listen(3000, () => {
    console.log('Server listening port 3000...');
})