import React, {useEffect} from 'react'
import Typography from '@mui/material/Typography'
import {useSelector} from 'react-redux';
import type {RootState} from '../store'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function PostsContainer() {
  const postsList = useSelector((state: RootState) => state.posts)
  const postsMap = postsList.map((post, index) => (
    <ImageListItem key={index}>
      <img src={post.imgURI} alt="" />
      <ImageListItemBar position="below" title={post.comment} />
    </ImageListItem>
  ))
  return (
    <section>
      <Typography variant="h2">Submitted posts show up down here</Typography>
      <ImageList variant="masonry">{postsMap}</ImageList>
    </section>
  )
}

export default PostsContainer