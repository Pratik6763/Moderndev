const express = require("express");
const cors = require("cors");

const allowedOrigins = [
  "http://localhost:3000",
  "http://192.168.0.154:3000",
  "https://moderndev-frontend.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS: " + origin));
      }
    },
    credentials: true,
  }),
);
const path = require("path");

const app = express();

// ✅ Security & middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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
