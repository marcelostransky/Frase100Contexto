const express = require('express');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');
const authenticated = require('./middleware/authenticated');
const app = express();

app.use(errorHandler);
app.use(authenticated);
app.use(express.json());
app.use(routes);

app.listen(5551);