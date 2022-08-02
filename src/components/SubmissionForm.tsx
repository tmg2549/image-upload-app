import React, {useState, SyntheticEvent} from 'react'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';
import Input from '@mui/material/Input';
import { useDispatch } from 'react-redux'
import { addPost } from '../slices/postSlice'
import Box from '@mui/material/Box';

function SubmissionForm() {
  // state for image preview
  const defaultImageURL = "https://protkd.com/wp-content/uploads/2017/04/default-image.jpg";
  const [image, setImage] = useState<string>(defaultImageURL);
  // keep track of comment input field
  const [comment, setComment] = useState<string>('');
  // enables dispatch to Redux store
  const dispatch = useDispatch();

  // changes preview image to uploaded image
  function onFileUpload(e: SyntheticEvent){
    const target: any = e.target;
    const file = target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        if (typeof reader.result === "string"){
          setImage(reader.result);
        }
    }
    // resets default image if upload fails
    reader.onerror = function (error) {
      console.log('Error: ', error);
      console.log('Resetting to default image');
      setImage(defaultImageURL);
    }
  }

  function handleCommentChange(e: SyntheticEvent){
    const target: any = e.target;
    setComment(target.value);
  }

  // sends POST request with image file and comment to server
  async function handleFormSubmit(e: SyntheticEvent){
    e.preventDefault();
    if (image === defaultImageURL || comment === '') {
      alert("Image and comment are requried to post.");
      return;
    }
    const target: any = e.target;
    const imageFile = target.elements.image.files[0];
    if (!(imageFile.type === 'image/jpeg' || imageFile.type === 'image/png')){
      alert("Image must be in JPEG or PNG file format.")
      return;
    }
    const postComment = target.elements.comment.value;

    const data = new FormData()
    data.append('image', imageFile)
    data.append('comment', postComment)

    const fetchOptions = {
      method: 'POST',
      enctype: 'multipart/form-data',
      body: data
    }

    try {
      const response = await fetch('http://localhost:3001/upload', fetchOptions).then(response => response.json())
      console.log(response);
    } catch (error) {
      alert('Make sure to start the server before submitting a post.');
      return;
    }

    // dispatch new comment to Redux store
    dispatch(addPost({imgURI: image, comment: comment}))

    // reset useState hooks
    setImage(defaultImageURL);
    setComment('');
    target.elements.image.value = null;
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <img src={image} alt="Preview for post" width="100%"></img>
      <Box sx={{mt: 2, display: 'flex', flexDirection: 'column', gap: 2}}>
        <Input name="image" type="file" onChange={onFileUpload}/>
        <Input name="comment" placeholder="Enter comment here..." value={comment} onChange={handleCommentChange}></Input>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>Submit post</Button>
      </Box>
    </form>
  )
}

export default SubmissionForm