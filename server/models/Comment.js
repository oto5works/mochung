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
});

commentSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;

    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Comment", commentSchema);
