import Typography from '@mui/material/Typography'
import {useSelector} from 'react-redux';
import type {RootState} from '../store'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Card from '@mui/material/Card'

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
      <Card variant="outlined" sx={{mx: 16, mb: 4, p: 4, maxWidth: 'md', borderRadius: 4}}>
          <Typography variant="h3">Submitted posts show up down here</Typography>
          <ImageList cols={3}>{postsMap}</ImageList>
      </Card>
    </section>
  )
}

export default PostsContainer