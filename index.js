const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://deploy:deploy@xtraderay-rztrb.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true,  useUnifiedTopology: true })

require('./src/models/Trade');

app.use(require('./src/rotas'));

var port=process.env.PORT || 3001;

app.listen(port); 