const sequelize = require("../config/database");
const User = require("./Users");
const Tickets = require("./ticketsmodel");
const Audience = require("./audiencemodel");
const Settings = require("./settingsmodel");

Tickets.belongsTo(User, {
  foreignKey: "assigned_to",
  as: "assignedUser",
});

User.hasMany(Tickets, {
  foreignKey: "assigned_to",
  as: "tickets",
});

Audience.belongsTo(User, {
  foreignKey: "userId",
  as: "mappedUser",
});

User.hasMany(Audience, {
  foreignKey: "userId",
  as: "audiences",
});

Settings.belongsTo(Audience, {
  foreignKey: "audienceId",
  as: "mappedAudience",
});

Audience.hasMany(Settings, {
  foreignKey: "audienceId",
  as: "settings",
});

module.exports = {
  sequelize,
  User,
  Tickets,
  Audience,
  Settings,
};
