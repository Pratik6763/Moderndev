// require("dotenv").config();
// const app = require("./app");
// const sequelize = require("./src/config/database");

// const start = async () => {
//   try {

//     if (process.env.DB_SYNC === "true") {
//       await sequelize.sync({ alter: true });
//       console.log("DB synced");
//     }

//     app.listen(5000, () => {
//       console.log("Server running");
//     });

//   } catch (err) {
//     console.log(err);
//   }
// };

// start();

// require("dotenv").config();
// const app = require("./app");
// const sequelize = require("./src/config/database");

// const PORT = process.env.PORT || 5000;

// const startServer = async () => {
//   try {
//     // ✅ Test DB connection
//     await sequelize.authenticate();
//     console.log("✅ Database connected");

//     // ⚠️ Sync only in development
//     if (process.env.NODE_ENV !== "production" && process.env.DB_SYNC === "true") {
//       await sequelize.sync({ alter: true });
//       console.log("✅ DB synced");
//     }

//     // ✅ Start server
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on port ${PORT}`);
//     });

//   } catch (error) {
//     console.error("❌ Failed to start server:", error);
//     process.exit(1); // stop app if DB fails
//   }
// };

// startServer();

require("dotenv").config();

console.log("🚀 Starting server...");

try {
  const app = require("./app");
  const sequelize = require("./src/config/database");

  const start = async () => {
  try {
    console.log("ENV CHECK:");
    console.log("DB_HOST:", process.env.DB_HOST);
    console.log("DB_USER:", process.env.DB_USER);
    console.log("DB_NAME:", process.env.DB_NAME);
    console.log("DB_PORT:", process.env.DB_PORT);

    await sequelize.authenticate();
    console.log("✅ Database connected");

    // 🔥 ADD THIS (IMPORTANT)
    await sequelize.sync({ alter: true });
    console.log("✅ DB synced");

    const tables = await sequelize.getQueryInterface().showAllTables();
    console.log("Tables in DB:", tables);

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("❌ Startup error:", err);
  }
};

  start();

} catch (err) {
  console.error("❌ CRASH BEFORE START:", err);
}