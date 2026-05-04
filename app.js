// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// require("dotenv").config();
// const app = express();
// app.use(
//   cors({
//     origin:"*",
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// const routes = require("./src/routes");
// app.use("/api", routes);
// module.exports = app;

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// ✅ Security & middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ CORS (restrict in production)
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    credentials: true,
  })
);

// ✅ Static files (uploads)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Routes
const routes = require("./src/routes");
app.use("/api", routes);

// ✅ Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is running 🚀",
  });
});

// ❌ 404 handler
app.use((req, res) => {
  res.status(404).json({
    status: "fail",
    message: "Route not found",
  });
});

// ❌ Global error handler
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
