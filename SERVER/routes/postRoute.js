const postModel = require("../module/postSchema");
const Route = require("express");
const userModel = require("../module/userSchema");
const postRoute = Route();
postRoute.post("/post", async (req, res) => {
  try {
    const post = req.body;
    const response = await postModel.create(post);

    await userModel.findByIdAndUpdate(post.userid, {
      $push: {
        post: response._id,
      },
    });
    res.send("done");
  } catch (error) {
    res.send("errrrrr");
    console.log(error);
  }
});
module.exports = postRoute;
