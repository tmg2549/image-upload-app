import React from 'react'
import SubmissionForm from './SubmissionForm'
import Typography from '@mui/material/Typography';

function SubmissionContainer() {
  return (
    <section>
      <Typography variant="h1">Post your posts here!!!</Typography>
      <Typography variant="subtitle1">Show us your artsy side. Post your pet, brunch, and sunset pics here. </Typography>
      <SubmissionForm/>
    </section>
  )
}

export default SubmissionContainer