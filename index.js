// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
const express = require('express');
const app = express();
const port = 3000;
//mongodb+srv://youtube:<password>@cluster0.h0q4orf.mongodb.net/?retryWrites=true&w=majority

app.get('/', (req, res) => {
  res.send('Hello World!' + req.host);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
