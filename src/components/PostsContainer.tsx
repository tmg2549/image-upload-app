import React, {useEffect} from 'react'
import Typography from '@mui/material/Typography'
import {useSelector} from 'react-redux';
import type {RootState} from '../store'

function PostsContainer() {
  const postsList = useSelector((state: RootState) => state.posts)
  return (
    <section>
      <Typography variant="h2">Submitted posts show up down here</Typography>
    </section>
  )
}

export default PostsContainer