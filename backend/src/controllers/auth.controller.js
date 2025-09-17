import validator from "validator";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { generateToken } from "../lib/utils.js";

export const signupUser = async (req, res) => {
  const { fullnames, email, password } = req.body;

  try {
    // validate user input
    if (!fullnames || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({ message: "Password is not strong enough" });
    }

    // check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const newUser = new User({
      fullnames,
      email,
      password: hashedPassword
    });

    if(newUser){
      generateToken(newUser._id, res);

      await newUser.save();
      
      res.status(201).json({
        _id: newUser._id,
        fullnames: newUser.fullnames,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(400).json({ message: "Invalid user data" });
    }

  } catch (error) {
    console.log('Error in signupUser:', error);
    return res.status(500).json({ message: "Server error" });
  }
}


// export const loginUser = async (req, res) => {}

// export const logoutUser = async (req, res) => {}