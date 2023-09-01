const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Hello, this is backend');
})

app.listen(3000, () => console.log(`Backend is listening at http://localhost/3000`))