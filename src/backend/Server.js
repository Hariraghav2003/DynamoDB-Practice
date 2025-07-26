const express = require("express");
const app = express();
const userRoutes = require("./routes/Dynamodbroute");
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use("/users", userRoutes);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

