const axios = require("axios");

module.exports = axios.create({
  baseURL: "https://api.aftership.com/v4",
  headers: {
    "aftership-api-key": process.env.AFTERSHIP_API_KEY,
    "Content-Type": "application/json",
  },
});