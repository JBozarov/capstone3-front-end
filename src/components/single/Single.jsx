import React, { useState, useEffect } from 'react'
import { useDispatch, connect } from 'react-redux'
import { Carousel, Breadcrumb } from 'react-bootstrap'

import { addToCart } from '../../redux/reducers/cartReducer'
import { toast, Flip } from 'react-toastify'
import { Link, withRouter } from 'react-router-dom'
import './Single.css'
import 'react-toastify/dist/ReactToastify.css'
toast.configure();

const Single = (props) => {
const [ item, setItem ] = useState({})
const [ index, setIndex ] = useState(0)
const [totalItems, setTotalItems] = useState(0)
const dispatch = useDispatch();



   useEffect(() => {
      if (props.match.params.serialNumber) {
         let thisItem = props.data.filter(val => val.serialNumber === props.match.params.serialNumber)[0];
         setItem(thisItem)
         let temp = thisItem.regionNe + thisItem.regionSe + thisItem.regionSw
         setTotalItems(temp)
      }
   }, [])


   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }


    const prepForCart = () => {
      let addedItem = { 
         ...item, cartQuantity: 1, totalPrice: item.price
      }
      dispatch(addToCart(addedItem));
      toast.success(`${item.productName} is added to your cart`, {
         closeButton: false,
         transition: Flip,
         className: 'toastify',
         position: "top-center",
         autoClose: 1500,
      });
    }
    

   return (
      <div>
         <div className='breadcrumb-box-single' >
            <Breadcrumb>
               <Breadcrumb.Item ><Link to='/'>HOME</Link></Breadcrumb.Item>
               <Breadcrumb.Item href="#"><Link to='#'>MEN'S</Link></Breadcrumb.Item>
               <Breadcrumb.Item active><Link to='/tshirts'>T-SHIRTS</Link></Breadcrumb.Item>
               <Breadcrumb.Item active>  {`${item.category} T-Shirt #${item.serialNumber}`} </Breadcrumb.Item>
            </Breadcrumb>
         </div>
         <div className="single-component" >
         <div className='carousel-container' >
            <Carousel activeIndex={index} onSelect={handleSelect} interval={59000} >
               <Carousel.Item style={{backgroundColor: 'whitesmoke'}} >
                  <img src={item.imageUrl} alt={item.productName} className="carousel-img" />
               </Carousel.Item>
            </Carousel>
            
         </div>
         <div className='info-container' >
            <div className='sub-cont1' >
               <h2> {item.productName} </h2>
               <h2> ${item.price} </h2>
            </div>
            <hr/>
               <p>Product description</p>
               <p>{item.description}</p>
            <hr/>
               <p>Product category</p>
               <h2>{item.category}</h2>
            <hr/>
            <div className="sub-cont3" >
               <p className="selected-size" > Quantity </p> 
               <h2>{totalItems}</h2>
            </div>
            <hr/>
            <div className="sub-cont4">
               <p>FREE 3-DAY SHIPPING</p>
               {totalItems>0 ? 
                  <button className="add-to-cart-btn" onClick={ () => prepForCart() } >ADD TO CART</button>
                  : <h2>SOLD OUT</h2>
               }
               
            </div>
         </div>
      </div>

      </div>
   )
}

function mapStateToProps(state) {
   return {
      data: state.dataReducer
   }
}


export default connect(mapStateToProps, {})(withRouter(Single));  