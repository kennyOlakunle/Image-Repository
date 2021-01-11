const express = require('express');
const app = express();
const initialRoutes = require('./routes/web');

app.use(express.urlencoded({ extended: true }));
initialRoutes(app);

let port = PROCESS.ENV.PORT || 3000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
