const express = require("express");

const PORT = process.env.PORT || 4000;
const NAME = process.env.NAME || "NPC";

const app = express();

app.get("/", (_req, res) => {
  res.send(`${NAME} ready for the job sir!`);
});

app.get("/kill/:name", (req, res) => {
  res.send(`Roger that ${NAME} killing ${req.params.name}`);
});

app.get("/whoareyou", (_req, res) => {
  res.send(`Yes Sir! its ${NAME}.`);
});

app.use("*", (_req, res) => {
  res.send(NAME + " Responding in all cases!");
});

app.listen(PORT, () => {
  console.log(NAME + " running on port " + PORT + "...");
});
