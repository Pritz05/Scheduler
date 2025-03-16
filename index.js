const express = require('express')
const app = express();
const port = 3000;
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');

require('dotenv').config();
app.use(express.static('public'));
app.use(cors());
app.use(compression());
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/scheduler', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/scheduler.html'));
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})