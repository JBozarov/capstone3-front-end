import React, { useState, useEffect } from 'react'
import './AdminDetails.css'
import { Card, ListGroup, ListGroupItem, Button, ButtonGroup } from 'react-bootstrap'
import { MdKeyboardBackspace } from 'react-icons/md'
import { useSelector, connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import Modal from "react-modal";
import axios from 'axios'

  




const AdminDetails = props => {
   const data = useSelector(state => state.dataReducer)
   const [ isOpen, setIsOpen ] = useState(false)
   const [ isAdminDetailsModelOpen, setIsAdminDetailsModelOpen ] = useState(false)
   //const [oneProduct, setOneProduct] = useState([])
   const oneProduct = data.filter(product => product.serialNumber === props.match.params.serialNumber)
   const [productName, setProductName] = useState(oneProduct[0].productName)
   const [description, setDescription] = useState(oneProduct[0].description)
   const [price, setPrice] = useState(oneProduct[0].price)
   const [quantity, setQuantity] = useState(oneProduct[0].quantity)
   const [category, setCategory] = useState(oneProduct[0].category)
   const [serialNumber, setSerialNumber] = useState(oneProduct[0].serialNumber)
   const [regionNe, setRegionNe] = useState(0)
   const [regionSe, setRegionSe] = useState(0)
   const [regionSw, setRegionSw] = useState(0)
      


   const updateProduct = () => {
      const body = {
         productName: oneProduct[0].productName,
         description, 
         price, 
         quantity, 
         category
      }
      axios.put(`http://localhost:8080/products/${props.match.params.serialNumber}`, body)
      //axios.put(`http://34.221.195.5/products/${props.match.params.serialNumber}`, body)
      .then(res => {
         props.history.push('/admin')
         setIsAdminDetailsModelOpen(false)
      })
      .catch(err => console.log(err))
   }

   const handleClick = val => {
      if (val === "Northeast") setRegionNe(parseInt(quantity))
      else if (val === "Southeast") setRegionSe(parseInt(quantity))
      else if (val === "Southwest") setRegionSw(parseInt(quantity))
   }

   const submit = () => {
      const body = {
         regionNe,
         regionSe, 
         regionSw
      }
      console.log('body is => ', body)
      axios.put(`http://localhost:8080/products/quantity/${serialNumber}`, body)
      .then(res => {
         setIsOpen(false)
         props.history.push('/admin')
      })
      .catch(err => {
         setIsOpen(false)
         console.log(err)
      })
      
   }


   

   return (
      <div className="admin-details" >
      <div className='go-back-btn' > <Link to={`/admin`}><MdKeyboardBackspace size={48} ></MdKeyboardBackspace></Link></div>
         <Modal isOpen={isAdminDetailsModelOpen} style={modelAdminDetails}>
            <h2>Updating {oneProduct[0].productName} </h2>
            <p className='modal-line' > <h2>Description</h2> <input type='textarea' className='medal-input' value={description} onChange={e => setDescription(e.target.value)} /></p>
            <p className='modal-line' ><h2>Price</h2> <input type='number' className='medal-input' value={price} onChange={e => setPrice(e.target.value)}/></p>
           
            <p className='modal-line' ><h2>Category</h2> <input type='text' className='medal-input' value={category} onChange={e => setCategory(e.target.value)} /></p>
            
            <p className='modal-line' >
               <Button variant="outline-dark" size="lg" onClick={() => updateProduct()} >SUBMIT</Button>{' '}
               <Button variant="outline-dark" size="lg" onClick={() => setIsAdminDetailsModelOpen(false)} >CANCEL</Button>{' '}
            </p> 
         </Modal> 

         <Modal isOpen={isOpen} style={modalStyle}>
         {/* <p className='modal-line' >Change Price  <input type='number' className='medal-input' placeholder="enter price" onChange={e => handlePrice(e)} /></p> */}
          <h2>{productName}</h2>
         
          <p className='modal-line' > How many adding<input type='number' className='medal-input' placeholder="enter quantity" onChange={e => setQuantity(e.target.value)}  /></p>

          <p className='region-dropdown' >Select Region: 
          <select onChange={e => handleClick(e.target.value)}  > 
             <option >Select Region</option>
             <option value='Northeast' >Northeast</option>
             <option value='Southeast' >Southeast</option>
             <option value='Southwest' >Southwest</option>
          </select>
         </p> 

          <p className='modal-line' >
             <Button variant="outline-dark" size="lg" onClick={submit} >SUBMIT</Button>{' '}
             <Button variant="outline-dark" size="lg" onClick={() => setIsOpen(false)} >CANCEL</Button>{' '}
          </p> 
       </Modal>
      
         {oneProduct.length>0 && oneProduct.map(product => (
            <div key={product.serialNumber} >
               <Card style={{ width: '40rem' }}>
                  <Card.Img variant="top" src={product.imageUrl} />
                  <Card.Title> <h1>{product.productName} </h1></Card.Title>
                  <Card.Text> <h5 > Description: {product.description} </h5> </Card.Text>
                  <ListGroup className="list-group-flush">
                     <ListGroupItem><h4> Serial Number: {product.serialNumber} </h4></ListGroupItem>
                     <ListGroupItem><h3> Price: ${product.price} </h3></ListGroupItem>
                     <ListGroupItem><h3> <h3> Category: {product.category} </h3> </h3></ListGroupItem>
                     <ListGroupItem><h3> Quantity: {product.quantity} </h3></ListGroupItem>
                        <ListGroupItem>
                        <Button variant="outline-secondary" onClick={()=>setIsAdminDetailsModelOpen(true)} >Update Product</Button>{' '}
                        <Button variant="outline-secondary" onClick={()=>setIsOpen(true)} >Add Quantity</Button>{' '}
                    </ListGroupItem> 
                  </ListGroup>
               </Card>
            </div>
         ))}
      </div>
   )
}


export default withRouter(AdminDetails); 



const modelAdminDetails = {
   content: {
     width: "650px",
     height: "550px",
     margin: "auto",
     display: "flex",
     flexDirection: "column",
     justifyContent: "space-around",
     alignItems: "center", 
   }
 };


 const modalStyle = {
   content: {
     width: "450px",
     height: "350px",
     margin: "auto",
     display: "flex",
     flexDirection: "column",
     justifyContent: "space-around",
     alignItems: "center", 
   }
 };
