const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.options('*', cors());

const routes = require('./routes/professional');

app.use(routes(express.Router()));

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});