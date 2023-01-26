import React from 'react'
import { Button, Container } from '@mui/material'

const BookCallButton = () => {
  return (
    <Container className="call-to-action-btn">
      <Button style={{ backgroundColor:"#27AE60", color:"gold", padding:"1rem",fontWeight:"bold", border:"solid gold"}} className="call-to-action-btn">Book free consultance call</Button>
    </Container>
  )
}

export default BookCallButton