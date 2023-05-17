const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        lowercase: true,
        unique: true, 
        validate: [validator.isEmail, "Please provide a valid email"], //validacija preku biblioteka
      },
      password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters"],
      },
      passwordResetToken: String,
      passwordResetExpired: Date,
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
  });
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;