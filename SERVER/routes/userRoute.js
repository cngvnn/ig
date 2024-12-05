const Route = require("express");
const userRoute = Route();
const userModel = require("../module/userSchema");
const bcrypt = require("bcrypt");
userRoute.post("/signup", async (req, res) => {
  try {
    const { password } = req.body;
    if (password) {
      const hash = await bcrypt.hashSync(password, 10);
      req.body.password = hash;
    }
    const user = req.body;
    const response = await userModel.create(user);
    console.log(response);
    res.send("User created successfully");
  } catch (error) {
    console.log(error);
    res.send("Error");
  }
});
userRoute.get("/user/posts", async (req, res) => {
  try {
    const respo = await userModel
      .find()
      .populate("post", "postImg description");
    res.send(respo);
  } catch (error) {
    console.log("errrrrrrooorrr");
  }
});
module.exports = userRoute;
