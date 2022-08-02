const axios = require('axios');

const postController = {}

postController.validateFormData = (req, res, next) => {
  if (!(req.file.mimetype === 'image/jpeg' || req.file.mimetype === 'image/png')){
    return res.status(400).json('Invalid image file')
  }
  if (req.body.comment === '' || typeof req.body.comment !== 'string'){
    return res.status(400).json('Invalid comment')
  }
  return next();
}

postController.sendFakeRequest = async (req, res, next) => {
  // Since API is fake, fakeCatcher is just a wrapper to avoid unnecessary error handling
  const fakeCatcher = async () => {
    try {
      await axios.post('/https://imagehasbeenverified.example.endpoint', {
        image: req.file,
        comment: req.body.comment
      })
      return true;
    } catch (error) {
      return true;
    }
  }
  const result = await fakeCatcher()
  return next();
}

module.exports = postController;