/**
 * Comment model
 */

const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  content: {
    // Comment content
    type: String,
    trim: true,
    required: [true, "Content cannot be empty"]
  },
  status: {
    // Comment status: 0 - Censored, 1 - Published
    type: String,
    required: true,
    enum: ["0", "1"],
    default: "1"
  },
  isRead: {
    // If the comment is read. It's used for admin purpose
    type: Boolean,
    required: true,
    default: false
  },
  isTop: {
    // If the comment is top. It's only set by admin
    type: Boolean,
    required: true,
    default: false
  },
  createdAt: {
    // Creation timestamp
    type: Number,
    required: true
  },
  updatedAt: {
    // Update timestamp
    type: Number,
    required: true
  },
  author: {
    // Comment's author
    // It should be an object with the following structure:
    // {
    // 	email: "foo@bar.com",
    // 	firstName: "Foo",
    // 	lastName: "Bar"
    // }
    type: Object,
    required: true
  },
  post: {
    // The comment under which post
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Post"
  }
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
