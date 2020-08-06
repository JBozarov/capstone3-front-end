import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { getAllData } from '../../redux/reducers/dataReducer'
import Modal from "react-modal";
import './Admin.css'
import axios from 'axios'




const Admin = () => {
   const products = useSelector(state => state.dataReducer)
   const dispatch = useDispatch();
   const [isAddProductModelOpen, setIsAddProductModelOpen] = useState(false);
   
   const [productName, setProductName] = useState('')
   const [description, setDescription] = useState('')
   const [price, setPrice] = useState(0)
   const [quantity, setQuantity] = useState(0)
   const [category, setCategory] = useState('')
   const [image_url, setImageUrl] = useState('')
   const url = "http://localhost:8080/products"; 
   //const url = "http://34.221.195.5/products"; 

   useEffect (() => {
      dispatch(getAllData());
   },[]); 


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
         <p className='modal-line' ><input type='text' className='medal-input' placeholder="Category" onChange={e => setCategory(e.target.value)} /></p>
         <p className='modal-line' ><input type='text' className='medal-input' placeholder="Image url" onChange={e => setImageUrl(e.target.value)} /></p>
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
                 
               </tr>
         {products.length>0 && products.map((item, i) => (
               <tr key={i} className="" >
                  <td>{i+1}</td>
                  <td> <Link to={`/admin/${item.serialNumber}`} style={{width: '100%', fontSize: '15px'}} > {item.productName}</Link></td>
                  <td><p style={{fontSize: '12px', width: '300px'}}  >{item.description.slice(0, 100)}...</p></td>
                  <td style={{fontSize: '12px'}}  >{item.serialNumber}</td>
                  <td style={{fontSize: '15px'}}  >${item.price}</td>
                  <td>{item.regionNe}</td>
                  <td>{item.regionSe}</td>
                  <td>{item.regionSw}</td>
                  <td>{item.category}</td>
               </tr> 
               ))}  
            <tfoot><td colSpan='8'></td></tfoot>
         </table>
      </div>
      </div>
   )
}


export default withRouter(Admin);


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