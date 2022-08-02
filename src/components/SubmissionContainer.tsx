import React from 'react'
import SubmissionForm from './SubmissionForm'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'

function SubmissionContainer() {
  return (
    <section>
      <Card variant="outlined" sx={{m: 16, mb: 4, p: 4, maxWidth: 'md', borderRadius: 4}}>
        <Typography variant="h2">Post your posts here!!!</Typography>
        <Typography variant="subtitle2" sx={{mb: 2}}>Show us your artsy side. Post your pet, brunch, and sunset pics here. </Typography>
        <SubmissionForm/>
      </Card>
    </section>
  )
}

export default SubmissionContainer