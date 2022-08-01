const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const multer = require('multer');
const upload = multer();
const postController = require('./postController');

app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/upload', upload.single('image'), postController.validateFormData, postController.sendFakeRequest, (req, res) => {
  return res.status(200).json('Successful upload')
})

// 404 route
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});



//global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})