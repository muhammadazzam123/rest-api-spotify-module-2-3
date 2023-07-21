const express = require("express");
const PORT = 3000;

// Routes
const playlistRoute = require("./routes/route");

const app = express();

app.use(express.json());

app.use("/playlist", playlistRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});