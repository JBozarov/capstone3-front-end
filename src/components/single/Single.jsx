import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel, Breadcrumb } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addToCart } from '../../redux/reducers/cartReducer'
import { toast, Flip } from 'react-toastify'
import { Link, withRouter } from 'react-router-dom'
import './Single.css'
import 'react-toastify/dist/ReactToastify.css'
toast.configure();

const Single = (props) => {
const [ item, setItem ] = useState({})
const [ index, setIndex ] = useState(0)
const [ selectedSize, setSelectedSize ] = useState('M')
const [ selectedColor, setSelectedColor ] = useState('')
const dispatch = useDispatch();

   useEffect(() => {
      if (props.match.params.product_id) {
         let thisItem = props.data.filter((val, ind) => ind === parseInt(props.match.params.product_id))[0]
         let firstImage = thisItem.images[0]
         setItem(thisItem)
         setSelectedColor(firstImage)
      }
   }, [])


   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }


    const selectImage = ind => {
       let imgUrl = item.images[ind]
       setSelectedColor(imgUrl)
    }
    const prepForCart = () => {
      let addedItem = { 
         ...item, images: selectedColor, size: selectedSize, cartQuantity: 1, totalPrice: item.price
      }
   
      dispatch(addToCart(addedItem));
      toast.success(`${item.name} is added to your cart`, {
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
               <Breadcrumb.Item active>  {`${item.manufacturer} T-Shirt #${item.serial}`} </Breadcrumb.Item>
            </Breadcrumb>
         </div>
         <div className="single-component" >
         <div className='carousel-container' >
            <Carousel activeIndex={index} onSelect={handleSelect} interval={3000} >
               <Carousel.Item style={{backgroundColor: 'whitesmoke'}} >
                  <img src={item.images && item.images[0]} alt={item.name} className="carousel-img" />
               </Carousel.Item>
               <Carousel.Item style={{backgroundColor: 'whitesmoke'}} >
                  <img src={item.images && item.images[1]} alt={item.name} className="carousel-img" />
               </Carousel.Item>
               <Carousel.Item style={{backgroundColor: 'whitesmoke'}} >
                  <img src={item.images && item.images[2]} alt={item.name} className="carousel-img" />
               </Carousel.Item>
               <Carousel.Item style={{backgroundColor: 'whitesmoke'}} >
                  <img src={item.images && item.images[3]} alt={item.name} className="carousel-img" />
               </Carousel.Item>
            </Carousel>
            
         </div>
         <div className='info-container' >
            <div className='sub-cont1' >
               <h2> {item.name} </h2>
               <h4> ${item.price} </h4>
            </div>
            <hr/>
            <div className="sub-cont2" >
               <p>Color you selected: <img src={selectedColor} className='selected-image'  /></p>
                  <div className='sub-cont2-box' > {item.images && item.images.map((image, i) => 
                  <img key={i} src={image} className='four-images' onClick={() => selectImage(i)} />
                  )}</div>
            </div>
            <hr />
            <div className="sub-cont3" >
               <h5 className="selected-size" >Size - {selectedSize}</h5> 
               <div className='five-btns' >
                  <button  className="size-btn" onClick={() => setSelectedSize('S')} >S</button>
                  <button  className="size-btn" onClick={() => setSelectedSize('M')} >M</button>
                  <button  className="size-btn" onClick={() => setSelectedSize('L')} >L</button>
                  <button  className="size-btn" onClick={() => setSelectedSize('XL')} >XL</button>
                  <button  className="size-btn" onClick={() => setSelectedSize('XXL')} >XXL</button>
               </div>
            </div>
            <hr/>
            <div className="sub-cont4">
               <p>FREE 3-DAY SHIPPING</p>
               <button className="add-to-cart-btn" onClick={ prepForCart } >ADD TO CART</button>
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