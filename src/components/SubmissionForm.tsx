import React, {useState, SyntheticEvent} from 'react'
import Button, {} from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';
import Input from '@mui/material/Input';

function SubmissionForm() {
  // state for image preview
  const defaultImageURL = "https://protkd.com/wp-content/uploads/2017/04/default-image.jpg";
  const [image, setImage] = useState<string>(defaultImageURL);

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
  // sends POST request with image file and comment to server
  async function handleFormSubmit(e: SyntheticEvent){
    e.preventDefault();
    const target: any = e.target;
    const imageFile = target.elements.image.files[0];
    const comment = target.elements.comment;

    const data = new FormData()
    data.append('image', imageFile)
    data.append('comment', comment)

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
      <Input name="comment" placeholder="Enter comment here..."></Input>
      <Button type="submit" variant="contained" endIcon={<SendIcon />}>Submit post</Button>
    </form>
  )
}

export default SubmissionForm