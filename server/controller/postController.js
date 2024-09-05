/* postController.js */
const Post = require("../models/Post");
const User = require("../models/User");
const Image = require("../models/Image");
const Comment = require("../models/Comment");
const Survey = require("../models/Survey");
const Coupon = require("../models/Coupon");
const imageController = require("./imageController"); // imageController 파일의 경로에 따라 수정해야 합니다.

exports.index = async (req, res, next) => {
  const posts = await Post.find({}).populate("user", {
    email: 1,
    name: 1,
    img: 1,
  });
  res.status(200).json(posts);
};

exports.detail = (req, res, next) => {
  Post.findById(req.params.id, (err, post) => {
    if (err) {
      return next(err);
    }
    res.status(200).json(post);
  });
};

exports.create = async (req, res, next) => {
  try {
    const user_id = String(req.body.userId);
    // FormData로부터 받은 문자열을 JSON 객체로 파싱
    const formData = JSON.parse(req.body.data);

    const homeFile = req.files.homeFile;
    console.log("homeFile: ", homeFile);
    if (homeFile) {
      formData.data.homeData.files.url = req.files.homeFile[0].url;
      formData.data.homeData.files.file.type = req.files.homeFile[0].mimetype;
    }
    const audioFile = req.files.audioFile;
    console.log("audioFile: ", audioFile);
    if (audioFile) {
      formData.data.audiosData.files.url = req.files.audioFile[0].url;
      formData.data.audiosData.files.file.type = req.files.audioFile[0].mimetype;
    }
    const locationFile = req.files.locationFile;
    console.log("locationFile: ", locationFile);
    if (locationFile) {
      formData.data.locationData.files.url = req.files.locationFile[0].url;
      formData.data.locationData.files.file.type = req.files.locationFile[0].mimetype;
    }
    const kakaotalkFile = req.files.kakaotalkFile;
    console.log("kakaotalkFile: ", kakaotalkFile);
    if (kakaotalkFile) {
      formData.data.kakaotalkData.files.url = req.files.kakaotalkFile[0].url;
      formData.data.kakaotalkData.files.file.type = req.files.kakaotalkFile[0].mimetype;
    }
    const galleryFiles = req.files.galleryFiles;
    console.log("galleryFiles: ", galleryFiles);
    if (galleryFiles) {
      // Update formData.data.galleryData.image.files array with URLs
      formData.data.galleryData.image.files = galleryFiles.map((file) => ({
        url: file.url,
      }));
    }

    const bankFiles0 = req.files.bankFiles0;
    console.log("bankFiles0: ", bankFiles0);
    if (bankFiles0) {
      // Iterate over each bank account in the hostData
      for (let i = 0; i < bankFiles0.length; i++) {
        const accountFile = bankFiles0[i];

        // Update the formData with the URL for each bank account
        formData.data.hostData.info[0].bank.account[i].files.url =
          accountFile.url;
      }
    }
    const bankFiles1 = req.files.bankFiles1;
    console.log("bankFiles1: ", bankFiles1);
    if (bankFiles1) {
      // Iterate over each bank account in the hostData
      for (let i = 0; i < bankFiles1.length; i++) {
        const accountFile = bankFiles1[i];

        // Update the formData with the URL for each bank account
        formData.data.hostData.info[1].bank.account[i].files.url =
          accountFile.url;
      }
    }

    // Calculate dateExpiration based on dateData.date
    const eventDate = new Date(formData.data.dateData.date);
    const dateExpiration = new Date(eventDate);
    dateExpiration.setMonth(eventDate.getMonth() + 3); // Set expiration date to 3 months after the event date

    // Find the user by user_id
    const user = await User.findById(user_id);

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    // Create a new Post
    const newPostInfo = {
      user_id,
      formData,
      pay: false,
      like: 0,
      dateCreate: Date.now(),
      dateExpiration, // Include the calculated date expiration
    };

    const newPost = new Post(newPostInfo);
    await newPost.save();

    // Update the 'archive' field in the user document with the new post's id
    user.archive.push(newPost._id); // Assuming 'archive' is an array of post IDs
    await user.save();

    console.log("New Post created:", newPost);

    res.status(201).json("저장완료");
  } catch (error) {
    console.error("Error:", error);
    next(error);
  }
};


exports.delete = async (req, res, next) => {
  try {
    const postId = req.params.id;

    // Find the post to be deleted
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Delete associated comments and surveys first
    if (post.comments.length > 0) {
      // Delete all comments associated with the post
      await Comment.deleteMany({ _id: { $in: post.comments } });
    }

    if (post.surveys.length > 0) {
      // Delete all surveys associated with the post
      await Survey.deleteMany({ _id: { $in: post.surveys } });
    }

    // Delete the post
    await post.remove();

    // Update user's archive
    const user = await User.findById(post.user_id);
    if (user) {
      user.archive.pull(postId); // Remove the post ID from the user's archive
      await user.save(); // Save the updated user
    }

    res.status(204).end(); // Respond with a success status
  } catch (error) {
    console.error("Error:", error);
    next(error);
  }
};

exports.edit = async (req, res, next) => {
  try {
    const postId = req.params.id; // Assuming the post ID is passed as a route parameter
    const updatedData = req.body; // Assuming the updated data is sent in the request body

    // Find the post by postId
    const post = await Post.findById(postId);

    if (!post) {
      console.log("Post not found");
      return res.status(404).json({ message: "Post not found" });
    }

    // Update the post with the new data
    post.formData = updatedData;
    post.dateUpdate = Date.now(); // Set dateUpdate to the current date and time

    // Save the updated post
    await post.save();

    console.log("Post updated:", post);

    res.status(200).json(post);
  } catch (error) {
    console.error("Error:", error);
    next(error);
  }
};

exports.urlDuplicate = async (req, res) => {
  const urlItem = req.body.params.data;

  try {
    // Search for any existing Post documents that have the same URL
    const existingPost = await Post.findOne({
      "formData.isConfirmed.url": urlItem,
    });

    // If a matching Post document was found, return an error response
    if (existingPost) {
      return res.status(200).json("false");
    }

    // If no matching Post documents were found, send a success response
    return res.status(200).json("true");
  } catch (err) {
    // If an error occurred during the database query, send a generic error response
    console.error(err);
    return res
      .status(500)
      .json({ error: "중복된 URL을 확인하는 동안 오류가 발생했습니다" });
  }
};

exports.active = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const { code } = req.body;

    // First, let's check if the provided post ID exists in the database
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if the post is already activated (pay is true)
    if (post.pay) {
      return res.status(400).json({ message: "이미 활성화된 청첩장입니다." });
    }

    // Next, let's check if the provided coupon code exists in the database
    const coupon = await Coupon.findOne({ code });

    if (!coupon) {
      return res.status(404).json({ message: "Coupon not found" });
    }

    // Check if the coupon has already been used
    if (coupon.used) {
      return res.status(400).json({ message: "중복된 쿠폰입니다." });
    }

    // Now, you can implement your logic to activate the post using the coupon.
    // This might involve updating the post's status or performing other actions.
    // For example, you can set a flag in the post document to mark it as activated.

    // For demonstration purposes, let's assume you have a field in the Post model called 'activated'.
    // You can set it to true when the coupon is valid.

    post.pay = true;
    await post.save();

    // Mark the coupon as used
    coupon.used = true;
    coupon.post = postId;
    coupon.dateUsed = Date.now();
    await coupon.save();

    return res.status(200).json({ message: "Post activated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.like = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // 현재 like 값을 1 증가시킴
    post.like += 1;

    await post.save();

    // Mark the coupon as used
    return res.status(200).json({ message: "Like incremented by 1" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
