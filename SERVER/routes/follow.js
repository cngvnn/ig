const express = require("express");
const followRoute = express.Router();
const userModel = require("../module/userSchema");

followRoute.post("/following", async (req, res) => {
  const { followerId, followingId } = req.body; 
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      followerId, 
      { $push: { following: followingId } },
      { new: true } 
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json({ message: "Following updated successfully.", updatedUser });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: " error" });
  }
});
module.exports = followRoute;
