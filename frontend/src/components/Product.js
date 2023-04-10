import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import '../index.css'


const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/product/${product._id}`}>
            <Card.Img src={product.image} variant = 'top' style={{ width: '14.2rem', height: '12rem' }}></Card.Img>
        </a>

        <Card.Body style={{ height: '9rem'}}>
            <a href={`/product/${product._id}`} class="text-decoration-none fw-bolder" >
                <Card.Title as='div'>
                    <strong>{product.name}</strong>
                </Card.Title>
            </a>

            <Card.Text as='div'>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </Card.Text>

            <Card.Text as='h3'>৳{product.price}</Card.Text>

        </Card.Body>
    </Card>
  )
}

export default Product