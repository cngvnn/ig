const { mongoose, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    profile: { type: String },
    bio: { type: String },
    post: [{ type: mongoose.Types.ObjectId, ref: "posts" }],
    following: [{ type: mongoose.Types.ObjectId, ref: "users" }],
    followers: [{ type: mongoose.Types.ObjectId, ref: "users" }],
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
