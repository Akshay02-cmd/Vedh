import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
  },
  username: {
    type: String,
    required: [true, "Please provide username"],
    minlength: 3,
    maxlength: 20,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
});

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME || '30d' }
  );
};

UserSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

const User = mongoose.model("User", UserSchema);
export default User;
