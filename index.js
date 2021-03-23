const express = require('express')


const app = express();

app.get('/', (rep, res) => {
  res.send('I know how to open node...YAY')
})

app.listen(4000, () => console.log("listing to port 4000"))