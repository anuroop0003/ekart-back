const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../configJWT");
const app = express();

// Middleware to check token validity
exports.verifyToken = (req, res, next) => {
  console.log("token verified");
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, config.jwtSecret);

    // Check if the token is expired
    if (decoded.exp < Date.now() / 1000) {
      return res.status(401).json({ message: "Token has expired" });
    }

    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).json({ message: "Invalid token" });
  }
};
