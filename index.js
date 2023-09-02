const express = require('express');
const app = express();

require('express-async-errors');
require('./startup/db')(); 
require('./startup/routes')(app);
require('./startup/error')();
require('./startup/validate')();

app.listen(3000, () => console.log(`Backend is listening at http://localhost/3000`))