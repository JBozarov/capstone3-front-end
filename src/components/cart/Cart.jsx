import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import './Cart.css'
import logo from '../../logo.svg'
import { BsArrowRight } from 'react-icons/bs'
import { Button } from 'react-bootstrap'
import { emptyCart, updateQuantity, removeItem } from '../../redux/reducers/cartReducer'
import { purchaseMade } from '../../redux/reducers/dataReducer'
import paypal from './paypal.jpg'
import { Link, withRouter } from 'react-router-dom'
import { toast, cssTransition } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure();

const Zoom = cssTransition({
   enter: 'zoomIn',
   exit: 'zoomOut',
   duration: 750,
   appendPosition: false
 });

const Cart = () => {
   const [ qty, setQty ] = useState(1)
   const [ tempIndex, setTempIndex ] = useState(0)
   const cart = useSelector(state => state.cartReducer)
   const dispatch = useDispatch();
   
   const total = cart.reduce((a, b) => parseFloat(a) + parseFloat(b.totalPrice), 0); 
   let grantTotal = (total*1.08).toFixed(2)

   console.log("cart is ", cart)

   const onToken = token => {
      console.log(token)
      dispatch(purchaseMade(cart))
      dispatch(emptyCart()); 
      toast.success("Thanks for purchasing from somerton.com", {
         closeButton: false,
         transition: Zoom,
         className: 'cart-toastify',
         position: "top-center",
         autoClose: 2000,
      })
   }

   

   const handleChange = (e, i) => {
      setQty(e.target.value)
      setTempIndex(i)
   }

 
   const updateItem = ind => {
      if ( tempIndex === ind ) {
         if ( cart[tempIndex].quantity < qty ) {
            toast.error(`Sorry only ${cart[tempIndex].quantity} items available in stock, please update the quantity and try again `, {
               closeButton: false,
               transition: Zoom,
               className: 'cart-toastify',
               position: "top-center",
               autoClose: 2000,
            })
         }
         else {
            dispatch(updateQuantity(tempIndex, qty))
            setQty(1)
            toast.info("Your cart has been updated!", {
               closeButton: false,
               transition: Zoom,
               className: 'cart-toastify',
               position: "top-center",
               autoClose: 1500,
            })
         }
         
      }
   }

   // const onOpened = () => {
   //    console.log('opened')
   // }
   // const onClosed = () => {
   //    console.log('closed ')
   // }

   const remove = index => dispatch(removeItem(index))
   return (
      <div className='cart-component'>
      
         <div className='cart-items' >
         {cart.length>0 ? cart.map((item, index) => 
            <div key={index} className='single-cart-item' > 
               <img src={item.imageUrl} className='cart-image' /> 
               <div className='right-box'>
                  <h6> {item.productName} </h6>
                  <p> ${item.price} each</p>
                  <p style={{fontSize: '20px'}} > ${item.totalPrice.toFixed(2)} </p>
                  <p> QTY: {item.cartQuantity} </p>
                  <p style={{fontSize: '10px', color: (item.regionNe + item.regionSe + item.regionSw)>10 ? 'black' : 'red'}} > ( {(item.regionNe + item.regionSe + item.regionSw)} left in stock )</p>
                  <p className='qty-and-update' >
                     {/*<label>Qty: <select>{[...Array(50)].map((e, i)=><option value={i+1} onChange={e => handleChange(e, item.id)} key={i}>{i+1}</option>)}</select></label>*/}
                     {/* <input type='number' value={index === tempIndex ? qty : 1} min='1' className='quantity-input' onChange={e => handleChange(e, index)} /> */}
                     <Button variant="outline-dark" size="sm" onClick={() => updateItem(index)} >UPDATE</Button>{' '}
                     <Button variant="outline-dark" size="sm" onClick={() => remove(index)} >REMOVE</Button>{' '}
                  </p>
               </div>
            </div>
            ) : <div className="empty-cart" >
                   <h1> Your cart is empty </h1>
                   <h1> <Link to='/tshirts' >Continue shopping </Link>  </h1>
                </div>  }
         </div>

         <div className='payment' >
            <div className='payment-box-1' >CHECKOUT <span> <BsArrowRight size={30} ></BsArrowRight> </span> </div>
            <div className='payment-box-1' style={{backgroundColor: 'white', color: 'black'}} > 
               <img src={paypal} className='paypal-img' /> 
               <span> <BsArrowRight size={30} ></BsArrowRight> </span> 
            </div>
            <div className='order-summary' >
               <h3>ORDER SUMMARY</h3>
               <h5 className='order-summary-line' ><span>PURCHASED ITEMS</span><span>{total.toFixed(2)}</span> </h5>
               <h5 className='order-summary-line' ><span>DELIVERY</span><span>FREE</span> </h5>
               <h5 className='order-summary-line' ><span>SALES TAX ( 8%) </span><span>{(total*0.08).toFixed(2)}</span> </h5>
               <input placeholder='Enter promo code' className='promo-code-input' />
               <h5 className='order-summary-line' style={{fontWeight: '800'}} ><span>GRAND TOTAL</span><span>{grantTotal}</span> </h5>
            </div>
            <StripeCheckout name='Somerton Sales' description='making a payment' 
               stripeKey='pk_test_Syf0NZeZFNpsmNmcoGCC9D7500Ek6o36XW' 
               token={onToken} 
               image={logo}
               amount={grantTotal*100} panelLabel="Submit Payment" 
               allowRememberMe={true} billingAddress={false} zipCode={false}
               // opened={onOpened} closed={onClosed}
               >
            </StripeCheckout>
         </div>
      </div>
   )
}

export default withRouter(Cart)