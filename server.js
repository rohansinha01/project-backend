//Dependencies

require('dotenv').config();
const express = require('express')
const morgan = require("morgan")
const cors = require('cors')
const ItemRouter = require('./controllers/item')

const app = express();

//Middleware
app.use(cors())
app.use(morgan())
app.use(express.json())

app.use('/items', ItemRouter);

app.get('/', (req, res) => {
    res.send('Barter Boyz')
})

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening on the port ${PORT}`))