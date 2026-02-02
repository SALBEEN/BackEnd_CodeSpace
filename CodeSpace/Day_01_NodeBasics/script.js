const server = require("express");
const app = server();

require("dotenv").config();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello its salbeen chapagains");
});

app.get("/facebook", (req, res) => {
  res.send("<i>Hello its my facebook account</i>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
