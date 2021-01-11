const express = require('express');
const app = express();
const initialRoutes = require('./src/routes/web');

app.use(express.urlencoded({ extended: true }));
initialRoutes(app);

let port = 3000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
