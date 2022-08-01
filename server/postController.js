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

postController.sendFakeRequest = (req, res, next) => {
  
}

module.exports = postController;