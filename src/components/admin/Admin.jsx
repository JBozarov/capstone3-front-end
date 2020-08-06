import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter, Route, Router } from 'react-router-dom'
import { editItem, deleteItem, getAllData } from '../../redux/reducers/dataReducer'
import { Buttons } from 'react-bootstrap'
import Modal from "react-modal";
import AdminDetails from '../../components/adminDetails/AdminDetails'
import './Admin.css'
import axios from 'axios'




const Admin = () => {
   const products = useSelector(state => state.dataReducer)
   const dispatch = useDispatch();
   const [ isOpen, setIsOpen ] = useState(false)
   const [isAddProductModelOpen, setIsAddProductModelOpen] = useState(false);
   
   const [productName, setProductName] = useState('')
   const [serialNumber, setSerialNumber] = useState('')
   const [description, setDescription] = useState('')
   const [price, setPrice] = useState(0)
   const [quantity, setQuantity] = useState(0)
   const [category, setCategory] = useState('')
   const [image_url, setImageUrl] = useState('')
   const url = "http://localhost:8080/products"; 

   useEffect (() => {
      dispatch(getAllData());
   },[]); 

 
   // Edit button 
   const handleEdit = ind => {
      let temp = products[ind]
      setPrice(temp.price)
      setQuantity(temp.quantity)
      setIsOpen(true)
      setProductName(temp.productName)
      setSerialNumber(temp.serialNumber)
   }

   // Submit button 
   const submit = () => {
      axios.put(url+`/quantity/${serialNumber}`, {quantity: quantity})
      .then(res => {
         setIsOpen(false)
      })
      .catch(err => {
         setIsOpen(false)
         console.log(err)
      })
      
   }

   // Post request
   const addProduct = () => {
      const body = {
         productName: productName,
         description: description,
         price: price,
         quantity: quantity,
         category: category,
         imageUrl: image_url
      }
      console.log(body)
      axios.post(url, body) 
      .then(res => {
         dispatch(getAllData());
         setIsAddProductModelOpen(false)
      })
      .catch(err => {
         setIsAddProductModelOpen(false)
         console.log("error is ", err)
      })
   }



   return (
      <div >
      <Button variant="success" size="lg" onClick={()=>setIsAddProductModelOpen(true)}>Add new product</Button>{' '}
      <p></p>
      <div className='admin-component'>


      <Modal isOpen={isAddProductModelOpen} style={modelAddProductStyle}>
         <h2>Adding new product to inventory</h2>
         <p className='modal-line' ><input type='text' className='medal-input' placeholder="Product name" onChange={e => setProductName(e.target.value)} /></p>
         <p className='modal-line' ><input type='textarea' className='medal-input' placeholder="Description" onChange={e => setDescription(e.target.value)} /></p>
         <p className='modal-line' ><input type='number' className='medal-input' placeholder="Product price" onChange={e => setPrice(e.target.value)}/></p>
         {/*<p className='modal-line' ><input type='number' min="1" className='medal-input' placeholder="Quantity" onChange={e => setQuantity(e.target.value)}/></p> */}
         <p className='modal-line' ><input type='text' className='medal-input' placeholder="Category" onChange={e => setCategory(e.target.value)} /></p>
         <p className='modal-line' ><input type='text' className='medal-input' placeholder="Image url" onChange={e => setImageUrl(e.target.value)} /></p>
         {/* <p className='modal-line' ><input type='text' className='medal-input' placeholder="Image url" /></p> */}
         <p className='modal-line' >
            <Button variant="outline-dark" size="lg" onClick={() => addProduct()} >SUBMIT</Button>{' '}
            <Button variant="outline-dark" size="lg" onClick={() => setIsAddProductModelOpen(false)} >CANCEL</Button>{' '}
         </p> 
      </Modal>

         <table className='table-one' >
            <thead><td colSpan="9">INVENTORY</td></thead>
               <tr>
                  <th>ID</th>
                  <th>Product Name</th>
                  <th>Description</th>
                  <th>Serial#</th>
                  <th>Price</th>
                  <th>Qty NE</th>
                  <th>Qty SE</th>
                  <th>Qty SW</th>
                  <th>Category</th>
                  {/*<th>Image</th> */}
                 
               </tr>
         {products.length>0 && products.map((item, i) => (
               <tr key={i} className="" >
                  <td>{i+1}</td>
                  <td> <Link to={`/admin/${item.serialNumber}`} style={{width: '100%'}} > {item.productName}</Link></td>
                  <td>{item.description}</td>
                  <td>{item.serialNumber}</td>
                  <td>{item.price}</td>
                  <td>{item.regionNe}</td>
                  <td>{item.regionSe}</td>
                  <td>{item.regionSw}</td>
                  <td>{item.category}</td>
                {/*  <td><img src={item.imageUrl} className="admin-cart-image" /></td> */}
                  
                {/*  <td><Button variant="outline-success" className="admin-card-btn" onClick={() => handleDelete(i)} >Delete</Button></td> */}
               </tr> 
               ))}  
            <tfoot><td colSpan='8'></td></tfoot>
         </table>
      </div>
      </div>
   )
}



export default withRouter(Admin);



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


const modelAddProductStyle = {
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