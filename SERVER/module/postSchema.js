const { mongoose, Schema } = require("mongoose");

const PostSchema = new Schema(
  {
    postImg: { type: String, required: true },
    description: { type: String, required: true },
    userid: { type: mongoose.Types.ObjectId, ref: "users", reguired: true },
  },
  { timestamps: true }
);

const postModel = mongoose.model("posts", PostSchema);
module.exports = postModel;
