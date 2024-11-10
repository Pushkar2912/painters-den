const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

const authRouter = require('./routes/auth')

app.use('/auth', authRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

