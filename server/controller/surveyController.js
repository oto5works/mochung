const Survey = require('../models/Survey');
const Post = require('../models/Post');

exports.create = async (req, res, next) => {
  try {
    const post_id = req.body.post_id;
    const host = req.body.host;
    const attend = req.body.attend;
    const name = req.body.name;
    const tell = req.body.tell;
    const pal = req.body.pal;
    const fare = req.body.fare;
    const receive = req.body.receive;
    const postcode = req.body.postcode;
    const address = req.body.address;
    const detail = req.body.detail;
    const message = req.body.message;

    // Get the client's real IP address from the x-forwarded-for header
    const user_ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // Find the post by post_id
    const post = await Post.findById(post_id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    // Create a new survey
    const newSurveyInfo = {
      post_id,
      user_ip,
      host,
      attend,
      name,
      tell,
      pal,
      fare,
      receive,
      postcode,
      address,
      detail,
      message,
      dateCreate: Date.now(),
    };

    const newSurvey = new Survey(newSurveyInfo);
    await newSurvey.save();

    // Update the 'surveys' field in the post document with the new survey's id
    post.surveys.push(newSurvey._id);
    await post.save();

    res.status(201).json(newSurvey);
  } catch (error) {
    console.error('Error:', error);
    next(error);
  }
};

exports.detail = async (req, res) => {
  console.log ('야레야레', req.params.id)
  const id = req.params.id
  const survey = await Post.findById(id).populate('surveys', {
    //post_id: 1,
    host: 1,
    attend: 1,
    name: 1,
    tell: 1,
    pal: 1,
    fare: 1,
    receive: 1,
    postcode: 1,
    address: 1,
    detail: 1,
    message: 1,
    //dateCreate: 1,
  })
  console.log ('염병', survey)

  res.status(200).json(survey)
}

exports.delete = async (req, res, next) => {
  try {
    const surveyId = req.params.id;

    // Find the survey to be deleted
    const survey = await survey.findById(surveyId);

    if (!survey) {
      return res.status(404).json({ message: 'survey not found' });
    }

    // Find the related post and update its surveys
    const post = await Post.findOneAndUpdate(
      { _id: survey.post_id },
      { $pull: { surveys: surveyId } },
      { new: true }
    );

    if (!post) {
      // If the related post is not found, you can decide what to do here
      // For example, return an error or continue with deletion
    }

    // Delete the survey
    await survey.remove();

    res.status(204).end(); // Respond with a success status

  } catch (error) {
    console.error('Error:', error);
    next(error);
  }
};
