import React, { useEffect } from 'react'
import { Carousel, Button } from 'react-bootstrap'
import image1 from '../../assets/image1.jpeg'
import image2 from '../../assets/image2.webp'
import image3 from '../../assets/image3.webp'
import image4 from '../../assets/image4.webp'
import image5 from '../../assets/image5.webp'
import { useDispatch } from 'react-redux'
import { getAllData } from '../../redux/reducers/dataReducer'
import './Dashboard.css'

const Dashboard = () => {
   const dispatch = useDispatch();
   useEffect (() => {
      dispatch(getAllData());
   },[]); 
   
   return (
      <div>
         <Carousel interval={3000} pause='hover' >
            <Carousel.Item><img className="dashboard-image" src={image5} alt="First slide"/></Carousel.Item>
            <Carousel.Item><img className="dashboard-image" src={image2} alt="First slide"/></Carousel.Item>
            <Carousel.Item><img className="dashboard-image" src={image3} alt="First slide"/></Carousel.Item>
            <Carousel.Item><img className="dashboard-image" src={image4} alt="First slide"/></Carousel.Item>
            <Carousel.Item><img className="dashboard-image" src={image1} alt="First slide"/></Carousel.Item>
         </Carousel>
         <div> <input className='subscribe-input' placeholder="Enter Your Email" /><Button variant="secondary subscribe-btn" size="lg" active> SUBSCRIBE </Button></div>
      </div>
   )
}


export default Dashboard