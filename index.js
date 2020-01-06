const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://deploy:deploy@xtraderay-rztrb.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true,  useUnifiedTopology: true })

require('./src/models/Trade');

app.use('/api', require('./src/rotas'));

const port=process.env.PORT || 3001;
app.listen(port);