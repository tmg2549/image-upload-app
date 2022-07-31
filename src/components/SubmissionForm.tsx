import React, {useState, SyntheticEvent} from 'react'
import Button, {} from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';

function SubmissionForm() {
  const [image, setImage] = useState<string>("https://protkd.com/wp-content/uploads/2017/04/default-image.jpg")

  function onChange(e: SyntheticEvent){
    const target: any = e.target
    const file = target.files[0];
    const reader = new FileReader()
    reader.readAsDataURL(file);
    reader.onload = () => {
        if (typeof reader.result === "string"){
          setImage(reader.result)
        }
    }
    
  }

  return (
    <form>
      <Input type="file" onChange={onChange}/>
      <img src={image} alt="Preview for post"></img>
      <Input placeholder="Enter comment here..."></Input>
      <Button variant="contained" endIcon={<SendIcon />}>Submit post</Button>
    </form>
  )
}

export default SubmissionForm