import React, { useState, useEffect } from 'react'
import { Breadcrumb, Card, Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { BsArrow90DegLeft } from 'react-icons/bs'
import './Products.css'
import { useSelector, connect } from 'react-redux'

const Products = (props) => {

   const localData = useSelector(state => state.dataReducer)
   console.log('localdata ', localData)

   

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
         {localData.length>1 && localData.map((item, i) => (
            <div key={i} className="product-container-box" >
            <Card style={{ width: '25rem', height: '40rem', border: 'none' }}>
                  <img src={item.images[0]} className="card-image" />
                     <div className='card-body' >
                        <Card.Text> {item.name} </Card.Text>
                        <p>Price: <b>${item.price}</b></p>
                        <p>Serial number <b>{item.serial}</b></p>
                        <p><b>{item.manufacturer} </b></p>
                        <p>{item.category}</p>
                        <div className={item.quantity>10 ? "card-quantity-green" : "card-quantity-red"} > {item.quantity} left in stock </div>
                        <Link to={`/products/${item.id}`} style={{width: '100%'}} > <Button variant="outline-success" className="card-btn" >SEE DETAILS</Button> </Link>
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