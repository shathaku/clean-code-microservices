const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const config = require('./config')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

const PORT = config.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})