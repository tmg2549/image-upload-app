import React from 'react';
import './App.css';
import SubmissionContainer from './components/SubmissionContainer'
import PostsContainer from './components/PostsContainer'
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="App">
      <Button variant="contained">Hello World</Button>
      <SubmissionContainer/>
      <PostsContainer/>
    </div>
  );
}

export default App;
