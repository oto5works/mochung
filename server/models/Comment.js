const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  post_id: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
  user_ip: String,
  isWriter: Boolean,
  writer: String,
  password: String,
  content: String,
  dateCreate: Date,
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Comment", // 대댓글의 부모 댓글을 참조
    default: null, // 부모 댓글이 없는 경우 null
  },
  children: [{
    type: Schema.Types.ObjectId,
    ref: "Comment" // 자식 댓글을 참조
  }]
});

commentSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;

    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Comment", commentSchema);
