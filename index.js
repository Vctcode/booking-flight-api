const express = require("express");

const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const flight = require("./routes/flightRoute");

const app = express();

app.use(json());

app.use("/flight", flight);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Testing response")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
