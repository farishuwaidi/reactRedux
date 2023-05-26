import React from 'react'
import Navibar from '../../navbar'
import { Container } from 'react-bootstrap'
const Notfound = () => {
  return (
    <div>
      <Navibar/>
      <Container className='mt-5 pt-3'>
          404 Not found
      </Container>
    </div>
  )
}

export default Notfound
