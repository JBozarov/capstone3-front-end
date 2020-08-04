import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { editItem, deleteItem, getAllProducts, getALlData } from '../../redux/reducers/dataReducer'
import Modal from "react-modal";
import './Admin.css'
import axios from 'axios'


const modalStyle = {
   content: {
     width: "450px",
     height: "350px",
     margin: "auto",
     display: "flex",
     flexDirection: "column",
     justifyContent: "space-around",
     alignItems: "center", 
   //   backgroundColor: 'whitesmoke',
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
   //   backgroundColor: 'whitesmoke',
   }
 };


const Admin = () => {
   const data = useSelector(state => state.dataReducer)
   //const [data, setData] = useState([])
   const dispatch = useDispatch(); 
   const [tId, setID] = useState(0)
   const [tPrice, setPrice] = useState(0)
   const [tQuantity, setQuantity] = useState(0)
   const [ isOpen, setIsOpen ] = useState(false)
   const [isAddProductModelOpen, setIsAddProductModelOpen] = useState(false);
   

  
   const [serialNumber, setSerialNumber] = useState('')
   const [productName, setProductName] = useState('')
   const [category, setCategory] = useState('')
   const [imgUrl, setImgUrl] = useState('')


   const handlePrice = e => setPrice(e.target.value)
   const handleQuantity = e => setQuantity(e.target.value)


   useEffect ( () => {
      getAllProducts(); 
   },[])

   const getAllProducts = () => {
      axios.get(`http://34.221.195.5/products`)
      .then(response => {
         console.log("line 66 ", response.data)
         dispatch(getALlData(response.data))
      })
      .catch(error => {
         console.log("Fetch data error is ", error)
      })
   }
   // Edit button 
   const handleEdit = ind => {
      let temp = data[ind]
      setID(temp.id)
      setPrice(temp.price)
      setQuantity(temp.quantity)
      setIsOpen(true)
      setProductName(temp.productName)
      setSerialNumber(temp.serialNumber)
   }

   // Submit button 
   const submit = () => {
      if (tQuantity<1) {
         window.alert(`Please change quantity, you entered ${tQuantity}`)
      } else {
      axios.put(`http://34.221.195.5/products/quantity/${serialNumber}`, {quantity: tQuantity})
      .then(res => {
         getAllProducts(); 
         setID(0)
         setPrice(0)
         setQuantity(0)
         setIsOpen(false)
      })
      .catch(err => {
         console.log(err)
      })
      }
      
      //dispatch(editItem([tId, tPrice, tQuantity]))
      
   }

   // Delete button 
   const handleDelete = ind => {
      let id = data[ind].id
      // console.log(temp.id)
      dispatch(deleteItem(id))
   }

   // Post request
   const addProduct = () => {
      const body = {
         productName: productName,
         quantity: tQuantity
      }
      axios.post(`http://34.221.195.5/products`, body) 
      .then(res => {
         setProductName("")
         setQuantity("")
         getAllProducts(); 
         setIsAddProductModelOpen(false)
      })
      .catch(err => {
         console.log("error is ", err)
      })
   }


   const handleQty = e => setQuantity(e.target.value)
   const handleName = e => setProductName(e.target.value)

   // Add new product button 
   const openAddProductModel = () => setIsAddProductModelOpen(true); 
   return (
      <div  >
      <button onClick={()=>openAddProductModel()} >Add new product</button>
      <div className='admin-component'>
      <Modal isOpen={isOpen} style={modalStyle}>
        {/* <p className='modal-line' >Change Price  <input type='number' className='medal-input' placeholder="enter price" onChange={e => handlePrice(e)} /></p> */}
         <h2>{productName}</h2>
         <p className='modal-line' > How many adding<input type='number' className='medal-input' placeholder="enter quantity" onChange={e => handleQuantity(e)}  /></p>
         <p className='modal-line' >
            <Button variant="outline-dark" size="lg" onClick={submit} >SUBMIT</Button>{' '}
            <Button variant="outline-dark" size="lg" onClick={() => setIsOpen(false)} >CANCEL</Button>{' '}
         </p> 
      </Modal>

      <Modal isOpen={isAddProductModelOpen} style={modelAddProductStyle}>
      <h2>Adding new product to inventory</h2>
      <p className='modal-line' ><input type='text' className='medal-input' placeholder="Product name" onChange={e => handleName(e)} /></p>
      <p className='modal-line' ><input type='number' min="1" className='medal-input' placeholder="Quantity" onChange={e => handleQty(e)}/></p>
      <p className='modal-line' ><input type='number' className='medal-input' placeholder="Product price" onChange={e => handlePrice(e)}/></p>
      <p className='modal-line' ><input type='text' className='medal-input' placeholder="Category" /></p>
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
                  <th>Serial#</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Category</th>
                  {/*<th>Image</th> */}
                  <th>Edit</th>
                  {/* <th>Delete</th> */}
               </tr>
         {data.length>0 && data.map((item, i) => (
               <tr key={i} className="" >
                  <td>{i+1}</td>
                  <td>{item.productName}</td>
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

      </div>
   )
}



export default Admin; 