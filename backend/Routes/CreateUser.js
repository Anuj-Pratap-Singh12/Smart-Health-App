const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const jwtSecret = "Maihoongianmaihoonbadatakatwar";

// Enable CORS for frontend requests
router.use(cors());

// ---------------- Signup Route ----------------
router.post("/createuser", [
    body("email").isEmail(),
    body("name").isLength({ min: 3 }),
    body("username").isLength({ min: 3 }),
    body("password").isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ message: errors.array()[0].msg });

    const { name, username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            const field = existingUser.email === email ? "Email" : "Username";
            return res.status(400).json({ message: `${field} already exists` });
        }

        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(password, salt);

        await User.create({ name, username, email, password: secPassword });

        res.json({ message: "Account created successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// ---------------- Login Route ----------------
router.post(
  "/loginuser",
  [
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password").isLength({ min: 5 }).withMessage("Password must be at least 5 characters"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, message: errors.array()[0].msg });
    }

    const { email, password } = req.body;

    try {
      const userData = await User.findOne({ email });
      if (!userData) {
        return res.status(400).json({ success: false, message: "Email not found" });
      }

      const pwdCompare = await bcrypt.compare(password, userData.password);
      if (!pwdCompare) {
        return res.status(400).json({ success: false, message: "Incorrect password" });
      }

      const data = { user: { id: userData.id } };
      const authToken = jwt.sign(data, jwtSecret);

      res.json({ success: true, authToken, message: "Login successful" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }
);

module.exports = router;
