const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/tradeapi', {useNewUrlParser: true,  useUnifiedTopology: true })

require('./src/models/Trade');

app.use('/api', require('./src/rotas'));

app.listen(3001);