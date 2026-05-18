import express from "express";

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.send("<h1>Server is Healthyyy</h1>");
});

app.get("/users", (req, res) => {
  res.json({
    name: "umair",
    age: "24",
  });
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}.`);
});
