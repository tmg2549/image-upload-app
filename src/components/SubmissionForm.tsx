import React, {useState} from 'react'
import Button, {} from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';

function SubmissionForm() {
  const [image, setImage] = useState("https://protkd.com/wp-content/uploads/2017/04/default-image.jpg")

  return (
    <FormControl>
      <Input type="file"/>
      <img src={image} alt="Preview for post"></img>
      <Input placeholder="Enter comment here..."></Input>
      <Button variant="contained" endIcon={<SendIcon />}>Submit post</Button>
    </FormControl>
  )
}

export default SubmissionForm