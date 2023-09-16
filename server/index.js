// server/index.js
'use strict';

const app = require('./app');

const PORT = 8153;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});