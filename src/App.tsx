import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SubmissionContainer from './components/SubmissionContainer'
import PostsContainer from './components/PostsContainer'

function App() {
  return (
    <div className="App">
      <SubmissionContainer/>
      <PostsContainer/>
    </div>
  );
}

export default App;
