const express = require('express');
const router = require('./config/routes');
const nodeSettings = require('./config/nodeSettings');

const port = nodeSettings.port;
const app = express();

app.use(express.json());

router(app);

app.listen(port, () => {
    console.log(`Ican\'tbelievewehavethisinstock running. Listening on ${port}`);
});
