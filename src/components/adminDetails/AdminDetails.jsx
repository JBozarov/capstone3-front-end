import React, {useState} from 'react'
import './AdminDetails.css'
import { Card, ListGroup, ListGroupItem, Button, ButtonGroup } from 'react-bootstrap'
import { MdKeyboardBackspace } from 'react-icons/md'




const AdminDetails = props => {
   const [data, setData] = useState([{
      id: 1,
      productName: "Handsome Squidward",
      description: "Handsome Squidward/Squidward Falling is a meme originating from the Spongebob Squarepants episode The Two Faces of Squidward. Users commonly paste music over the falling sequence and loop it for varying amounts of time. The earliest known instance of this was in November of 2008 when SilverWingedBandit uploaded a loop of the sequence synced to the Mega Man 7 Intro Stage Theme.",
      serial: "EdcbQ-G5vUb-A6n",
      price: 2.99,
      quantity: 6,
      category: 'food',
      imageUrl: "https://i.kym-cdn.com/entries/icons/facebook/000/003/047/omg.jpg"
   }])
   console.log(props)
   return (
      <div className="admin-details" >
      <div className='go-back-btn' ><MdKeyboardBackspace size={48} ></MdKeyboardBackspace></div>
      
         {data.length>0 && data.map(product => (
            <div key={product.id} >
               <Card style={{ width: '50rem' }}>
                  <Card.Img variant="top" src={product.imageUrl} />
                  <Card.Title> <h1>{product.productName} </h1></Card.Title>
                  <Card.Text> <h5 > {product.description} </h5> </Card.Text>
                  <ListGroup className="list-group-flush">
                     <ListGroupItem><h4> Serial Number: {product.serial} </h4></ListGroupItem>
                     <ListGroupItem><h3> Price: ${product.price} </h3></ListGroupItem>
                     <ListGroupItem><h3> Quantity: {product.quantity} </h3></ListGroupItem>
                     <ListGroupItem><h3> <h3> Category: {product.category} </h3> </h3></ListGroupItem>
                    {/* <ListGroupItem>
                        <Button variant="outline-secondary">Change Product</Button>{' '}
                        <Button variant="outline-secondary">Delete Product</Button>{' '}
                    </ListGroupItem> */}
                  </ListGroup>
               </Card>
            </div>
         ))}
      </div>
   )
}


export default AdminDetails; 
