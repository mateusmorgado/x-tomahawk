import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import {generateTokenandSetCookie} from "../lib/utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { username, fullName, email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already taken" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be atleast 6 characters long" });
    }
    //hash password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      fullName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      generateTokenandSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        fullName: newUser.fullName,
        followers: newUser.followers,
        following: newUser.following,
        profileImg: newUser.profileImg,
        coverImg: newUser.coverImg,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("error in signup controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  res.json({ data: "You hit the login endpoint" });
};

export const logout = async (req, res) => {
  res.json({ data: "You hit the logout endpoint" });
};
