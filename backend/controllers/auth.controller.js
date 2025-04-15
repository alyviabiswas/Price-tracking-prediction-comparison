import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { email, fullName, password } = req.body;

  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
    });
  } catch (error) {
    console.error('Register error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};






export const login = async (req, res) => {
  try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
          return res.status(401).json({ message: "Invalid credentials" });
      }

      // Generate JWT token
      const token = jwt.sign(
          { id: user._id, email: user.email },
          process.env.JWT_SECRET, 
          { expiresIn: "1h" }
      );

      res.status(200).json({ token, user });
  } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Internal server error" });
  }
};