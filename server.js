const express = require("express");
const app = express();
const Port = process.env.PORT || 3000;
const cors = require("cors");

const dataAnalyst = {
  senior: {
    name: "Peter",
    age: 27,
    location: "Lagos",
  },
  junior: {
    name: "Gregory",
    age: 24,
    location: "Portharcourt",
  },
  midlevel: {
    name: "Anita",
    age: 31,
    location: "Jos",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/api/:name", (req, res) => {
  const position = req.params.name.toLowerCase();
  if (dataAnalyst[position]) {
    res.send(dataAnalyst[position]);
  } else {
    res.send("NOT AVAILABLE");
  }
  //res.json(dataAnalyst);
});

app.use("/public", express.static(__dirname + "/public"));
app.use(cors());
app.listen(Port, () => console.log("listening on port 3000......go catch"));
