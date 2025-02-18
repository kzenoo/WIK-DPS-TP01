import express from 'express';
import os from 'os';

const app = express();
const PORT = 3000;

app.get('/ping', (req, res) => {
    const hostname = os.hostname();
    console.log(`Ping received from: ${hostname}`);
    res.send(`Pong from ${hostname}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
