import React, { useState, useEffect } from 'react'
import { Breadcrumb, Card, Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { BsArrow90DegLeft } from 'react-icons/bs'
import './Products.css'
import { useSelector, connect } from 'react-redux'

const Products = (props) => {

   //const localData = useSelector(state => state.dataReducer)
   const data = useSelector(state => state.dataReducer)
   console.log(data)

   

   return (
      <div>
         <div className='breadcrumb-box' >
            <Breadcrumb>
               <Breadcrumb.Item href="#"><Link to='/'>HOME</Link></Breadcrumb.Item>
               <Breadcrumb.Item href="#"><Link to='#'>MEN'S</Link></Breadcrumb.Item>
               <Breadcrumb.Item active>T-SHIRTS</Breadcrumb.Item>
            </Breadcrumb>
         </div>

         <div className='product-container'  >
         {data.length>0 && data.map((item, i) => (
            <div key={i} className="product-container-box" >
            <Card style={{ width: '25rem', height: '40rem', border: 'none' }}>
                  <img src={item.imageUrl} className="card-image" />
                     <div className='card-body' >
                        <Card.Text><h3>{item.productName}</h3></Card.Text>
                        <p>Price: <b>${item.price}</b></p>
                        <p>Serial number: <b>{item.serialNumber}</b></p>
                        <p>Description: <b>{item.description} </b></p>
                        <p>Category: {item.category}</p>
                        <div className={(item.regionNe + item.regionSe + item.regionSw)>10 ? "card-quantity-green" : "card-quantity-red"} > {(item.regionNe + item.regionSe + item.regionSw)} left in stock </div>
                        <Link to={`/products/${item.serialNumber}`} style={{width: '100%'}} > <Button variant="outline-success" className="card-btn" >SEE DETAILS</Button> </Link>
                     </div>
               </Card>
            </div> 
         ))}  
         </div>
      </div>
   )
}

function mapStateToProps(state) {
   return {
      data: state.dataReducer
   }
}


export default connect(mapStateToProps, {})(withRouter(Products)); 