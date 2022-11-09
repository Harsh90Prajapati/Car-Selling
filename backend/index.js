require("dotenv").config({ path: "./.env" });
const express = require("express");
const connectDB = require("./config/db");
const fileRoute = require("./routes/file");

const errorHandler = require("./middleware/error");
var cors = require('cors');


const app = express();

connectDB();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));
app.use("/api/file", fileRoute);

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`listening on port ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
