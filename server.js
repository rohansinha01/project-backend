require('dotenv').config();
const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('Barter Boyz')
})

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening on the port ${PORT}`))