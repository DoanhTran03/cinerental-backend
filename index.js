const express = require('express');
require('express-async-errors');
const app = express();

const PORT = process.env.PORT;

require('./startup/error')();
require('./startup/routes')(app);
require('./startup/validate')();
require('./startup/db')(); 

app.listen(PORT, () => console.log(`Backend is listening at http://localhost/3000`));