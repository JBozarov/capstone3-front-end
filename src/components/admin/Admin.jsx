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
<<<<<<< HEAD
   const [isOpen, setIsOpen] = useState(false)
=======
>>>>>>> de194bdfde485e4022e9dcefc9dc81a42dd8586c
   const [isAddProductModelOpen, setIsAddProductModelOpen] = useState(false);

   const [productName, setProductName] = useState('')
   const [description, setDescription] = useState('')
   const [price, setPrice] = useState(0)
   const [quantity, setQuantity] = useState(0)
   const [category, setCategory] = useState('')
<<<<<<< HEAD

   
=======
   const [image_url, setImageUrl] = useState('')
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4d8c0b7372a5ec3c2564f03ccbecfe92d4d55014
   const url = "http://localhost:8080/products"; 
=======
   //const url = "http://localhost:8080/products"; 
   const url = "http://34.221.195.5/products"; 
>>>>>>> de194bdfde485e4022e9dcefc9dc81a42dd8586c
=======
   const url = "http://localhost:8080/products"; 
   // const url = "http://34.221.195.5/products"; 
>>>>>>> 7ab85c6e870865ff9cc8bf75d782e5867b867bd0

   useEffect(() => {
      dispatch(getAllData());
   }, []);


<<<<<<< HEAD
   // Edit button 
   const handleEdit = ind => {
      let temp = products[ind]
      setPrice(temp.price)
      setQuantity(temp.quantity)
      setProductName(temp.productName)
      setSerialNumber(temp.serialNumber)
   }

<<<<<<< HEAD
   // Submit button 
   const submit = () => {
      axios.put(url + `/quantity/${serialNumber}`, { quantity: quantity })
         .then(res => {
            setIsOpen(false)
         })
         .catch(err => {
            setIsOpen(false)
            console.log(err)
         })

   }
=======
>>>>>>> de194bdfde485e4022e9dcefc9dc81a42dd8586c
=======
>>>>>>> 7ab85c6e870865ff9cc8bf75d782e5867b867bd0

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
<<<<<<< HEAD
      axios.post(url, body)
         .then(res => {
            setProductName("")
            setQuantity("")
            //getAllProducts(); 
            setIsAddProductModelOpen(false)
         })
         .catch(err => {
            setIsAddProductModelOpen(false)
            console.log("error is ", err)
         })
=======
      axios.post(url, body) 
      .then(res => {
         dispatch(getAllData());
         setIsAddProductModelOpen(false)
      })
      .catch(err => {
         setIsAddProductModelOpen(false)
         console.log("error is ", err)
      })
>>>>>>> 4d8c0b7372a5ec3c2564f03ccbecfe92d4d55014
   }


   return (
<<<<<<< HEAD
      <div  >
<<<<<<< HEAD
         <button onClick={() => setIsAddProductModelOpen(true)} >Add new product</button>
         <div className='admin-component'>
            <Modal isOpen={isOpen} style={modalStyle}>
               {/* <p className='modal-line' >Change Price  <input type='number' className='medal-input' placeholder="enter price" onChange={e => handlePrice(e)} /></p> */}
               <h2>{productName}</h2>
               <p className='modal-line' > How many adding<input type='number' className='medal-input' placeholder="enter quantity" onChange={e => setQuantity(e.target.value)} /></p>
               <p className='modal-line' >
                  <Button variant="outline-dark" size="lg" onClick={submit} >SUBMIT</Button>{' '}
                  <Button variant="outline-dark" size="lg" onClick={() => setIsOpen(false)} >CANCEL</Button>{' '}
               </p>
            </Modal>

            <Modal isOpen={isAddProductModelOpen} style={modelAddProductStyle}>
               <h2>Adding new product to inventory</h2>
               <p className='modal-line' ><input type='text' className='medal-input' placeholder="Product name" onChange={e => setProductName(e.target.value)} /></p>
               <p className='modal-line' ><input type='textarea' className='medal-input' placeholder="Description" onChange={e => setDescription(e.target.value)} /></p>
               <p className='modal-line' ><input type='number' className='medal-input' placeholder="Product price" onChange={e => setPrice(e.target.value)} /></p>
               <p className='modal-line' ><input type='number' min="1" className='medal-input' placeholder="Quantity" onChange={e => setQuantity(e.target.value)} /></p>
               <p className='modal-line' ><input type='text' className='medal-input' placeholder="Category" onChange={e => setCategory(e.target.value)} /></p>
               {/* <p className='modal-line' ><input type='text' className='medal-input' placeholder="Image url" /></p> */}
               <p className='modal-line' >
                  <Button variant="outline-dark" size="lg" onClick={() => addProduct()} >SUBMIT</Button>{' '}
                  <Button variant="outline-dark" size="lg" onClick={() => setIsAddProductModelOpen(false)} >CANCEL</Button>{' '}
               </p>
            </Modal>

            <table className='table-one' >
               <thead><td colSpan="9">INVENTORY</td></thead>
=======
      <button onClick={()=>setIsAddProductModelOpen(true)} >Add new product</button>
=======
      <div >
      <Button variant="success" size="lg" onClick={()=>setIsAddProductModelOpen(true)}>Add new product</Button>{' '}
      <p></p>
>>>>>>> 6afca1c80a8fdf87c8b62acc5e905f408dc1f270
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
>>>>>>> a18a40b86599b4fed24e85a35935192421b31853
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
<<<<<<< HEAD
               {products.length > 0 && products.map((item, i) => (
                  <tr key={i} className="" >
                     <td>{i + 1}</td>
                     <td> <Link to={`/admin/${item.serialNumber}`} style={{ width: '100%' }} > {item.productName}</Link></td>
                     <td>{item.description}</td>
                     <td>{item.serialNumber}</td>
                     <td>{item.price}</td>
                     <td>{item.quantity}</td>
                     <td>{item.category}</td>
                     {/*  <td><img src={item.imageUrl} className="admin-cart-image" /></td> */}
                     <td><Button variant="outline-success" className="admin-card-btn" onClick={() => handleEdit(i)} >Add Quantity</Button></td>
                     {/*  <td><Button variant="outline-success" className="admin-card-btn" onClick={() => handleDelete(i)} >Delete</Button></td> */}
                  </tr>
               ))}
               <tfoot><td colSpan='9'></td></tfoot>
            </table>
         </div>
=======
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
               </tr> 
               ))}  
            <tfoot><td colSpan='8'></td></tfoot>
         </table>
      </div>
>>>>>>> a18a40b86599b4fed24e85a35935192421b31853
      </div>
   )
}


export default withRouter(Admin);


<<<<<<< HEAD

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


=======
>>>>>>> de194bdfde485e4022e9dcefc9dc81a42dd8586c
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
