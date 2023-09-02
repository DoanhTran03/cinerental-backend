const express = require('express');
require('express-async-errors');
const app = express();

require('./startup/db')(); 
require('./startup/routes')(app);
require('./startup/error')();
require('./startup/validate')();

app.listen(3000, () => console.log(`Backend is listening at http://localhost/3000`))