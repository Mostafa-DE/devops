const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      name: "John Doe..",
      age: 30,
    },
    {
      name: "Alex..",
      age: 20,
    },
  ]);
});

app.listen(3001, () => {
  console.log("Server started on port 3000");
});
