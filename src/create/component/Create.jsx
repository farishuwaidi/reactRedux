import React from 'react'
import Navibar from '../../navbar'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Create = () => {
  return (
    <div>
      <Navibar/>
      <Container className='mt-5 pt-3'>
        <Form className='shadow-lg p-5'>
            <h3>Input New Product</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Product name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Count</Form.Label>
                <Form.Control type="number" placeholder="count" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="price" />
            </Form.Group>
            <Form.Group className="position-relative mb-3">
                <Form.Label>File</Form.Label>
                <Form.Control type="file" required name="file"/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
      </Container>
    </div>
  )
}

export default Create
