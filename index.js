require('dotenv').config()

const server = require('./server.js');

server.get("/", (req, res) => {
    res.send("It's alive!");
  });  

const port = process.env.PORT;

server.listen(port, () => console.log(`\n API on port ${port} \n`));
