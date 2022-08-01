import React, {useState, SyntheticEvent} from 'react'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';
import Input from '@mui/material/Input';
import { useDispatch } from 'react-redux'
import { addPost } from '../slices/postSlice'

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
    const postComment = target.elements.comment.value;

    const data = new FormData()
    data.append('image', imageFile)
    data.append('comment', postComment)

    // dispatch new comment to Redux store
    dispatch(addPost({imgURI: image, comment: comment}))

    // reset useState hooks
    setImage(defaultImageURL);
    setComment('');
    
    // const fetchOptions = {
    //   method: 'POST',
    //   body: data
    // }

    // const response = await fetch('/upload', fetchOptions)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <Input name="image" type="file" onChange={onFileUpload}/>
      <img src={image} alt="Preview for post"></img>
      <Input name="comment" placeholder="Enter comment here..." value={comment} onChange={handleCommentChange}></Input>
      <Button type="submit" variant="contained" endIcon={<SendIcon />}>Submit post</Button>
    </form>
  )
}

export default SubmissionForm