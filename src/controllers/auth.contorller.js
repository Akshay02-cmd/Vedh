import { StatusCodes } from "http-status-codes";
import User from "../models/user.models.js";

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.cookie("token", token, {
    httpOnly: true,
  });
  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.username }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Please provide email and password" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Invalid credentials (email)" });
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Invalid credentials (password)" });
  }
  const token = user.createJWT();
  res.cookie("token", token, {
    httpOnly: true,
  });
  res
    .status(StatusCodes.OK)
    .json({ message: "Login successful", redirect: "/dashboard.html" });
};

export { login, register };
