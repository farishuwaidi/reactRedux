import React from 'react'
import Navbar from '../../navbar'
import { Container,Button } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Carousel from 'react-bootstrap/Carousel';
import { decrement, increment } from '../../app/CounterFeatures/action';

const Home = () => {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  console.log(counter)
  return (
    <div>
      <Navbar/>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1532289735437-a07b8f3240e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fDEwODB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1619551964399-dad708b59b8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fDEwODB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container>
          <Button onClick={()=> dispatch(decrement(1))} variant='primary'> - </Button>
          <span>{counter.count}</span>
          <Button onClick={()=> dispatch(increment(1))} variant='primary'> + </Button>
      </Container>
    </div>
  )
}

export default Home
