const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());

app.use(require('./controller/index.controller'));


app.listen(process.env.PORT || 4500, () => {
    console.log(`Listening at port ${process.env.PORT || 4500}`);
});