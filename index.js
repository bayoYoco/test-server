const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/', (req, res) => res.json({ name: 'Justin', level: 'grad' }) );

app.get('/hello', (req, res) => res.json({ greeting: 'Hello', timeOfDay: new Date() }) );

app.post('/grads', (req, res) => res.status(201).json({ message: 'We have created a new resource'}));

app.listen(process.env.PORT, () => {
   console.log(`Yaaaaaay!! We have a server 🔥🚀 running on 3000`);
});
