import React from 'react'
import Navibar from '../../navbar'
import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

let produk = [
    {
        id: 1,
        productName: "Mouse Wireless",
        description: "bloetooth 5.0 dongle reusable recharge",
        count: 50,
        price: 90000,
    },
    {
        id: 2,
        productName: "Mechanical Keyboard Wireless",
        description: "bloetooth 5.0 dongle reusable recharge",
        count: 60,
        price: 120000,
    },
    {
        id: 3,
        productName: "Robot TWS T50",
        description: "bloetooth 5.0",
        count: 30,
        price: 150000,
    },
    {
        id: 4,
        productName: "Portable fan",
        description: "merk asus",
        count: 20,
        price: 40000,
    },
    {
        id: 5,
        productName: "Fantech headset",
        description: "bloetooth 5.0 reusable recharge",
        count: 20,
        price: 170000,
    }
]

const Product = () => {
  return (
    <div>
      <Navibar/>
      <Container className='mt-5 pt-3'>
        <h3>Product List</h3>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>id</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Count</th>
                <th>Price</th>
                <td></td>
                </tr>
            </thead>
            <tbody>
                {produk.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.productName}</td>
                        <td>{item.description}</td>
                        <td>{item.count}</td>
                        <td>{item.price}</td>
                        <td><Button variant="success" className='w-100'>View</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default Product
