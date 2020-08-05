import React, { useState } from 'react';
import './Header.css';
import DropdownMenu from '../dropDownMenu/DropDownMenu';
import { Link, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { search } from '../../redux/reducers/dataReducer'



const Header = props => {
  const [ dropdownActive, setDropdownActive ] = useState(true)
  const [ searchInput, setSearchInput ] = useState('')
  const [ adminMode, setAdminMode ] = useState(true); //props.adminMode
  const cart = useSelector(state => state.cartReducer)
  let qtyCount = cart.reduce((a, b) => a + b.cartQuantity, 0);
  const dispatch = useDispatch();  
   const toggleAdmin = () => setAdminMode(adminMode => !adminMode)
  const toggleMenu = () => setDropdownActive(!dropdownActive) 
  const enterMenu = () => setDropdownActive(false)  
  const leaveMenu = () => setDropdownActive(true) 
  console.log(props)
  console.log("header path ", props.location)
  const handleChange = e => {
     setSearchInput(e.target.value)
   }
   dispatch(search(searchInput))
    return (
         <div className="header-container">
            <div className="navBarContainer" >
               <div className="topNav">
                  <div className="upper-box" >
                    <h5>Contact Us</h5>
                     {props.location.pathname === '/admin' ? <Link onClick={toggleAdmin} to='/'><h5>Log out</h5></Link> : <Link onClick={toggleAdmin} to='/admin'><h5>Admin login</h5></Link> }
                     { adminMode ? 
                     <div className={qtyCount ? 'cart-has-item' : null}>
                        <Link to='/cart'><h5>Cart({qtyCount})</h5> </Link>
<<<<<<< HEAD
                    </div> :
                    <h5></h5>}
=======
                    </div> */}
                  </div>
                  <div className="lower-box" >
                       {/* <ul className="nav-bar"  >
                        <li onClick={toggleMenu} onMouseEnter={enterMenu}>MEN'S</li>
                        <li onClick={toggleMenu} onMouseEnter={enterMenu}>WOMEN'S</li>
                  <li onClick={toggleMenu} onMouseEnter={enterMenu}>KID'S</li> 
    <li onClick={toggleMenu} onMouseEnter={enterMenu}>DEALS</li> 
                     </ul>
                   {/*  {props.location.pathname === '/tshirts' ? <input className='search-input' value={searchInput} placeholder="Search name or max-price" onChange={e => handleChange(e)} /> : null } */}
                   {/*  {<input className='search-input' value={searchInput} placeholder="Search" onChange={e => handleChange(e)} /> } */}
>>>>>>> a18a40b86599b4fed24e85a35935192421b31853
                  </div>
                   { adminMode ? 
                     <div className="lower-box" >
                    

                        <ul className="nav-bar"  >
                           <li onClick={toggleMenu} onMouseEnter={enterMenu}>MEN'S</li>
                           <li onClick={toggleMenu} onMouseEnter={enterMenu}>WOMEN'S</li>
                           <li onClick={toggleMenu} onMouseEnter={enterMenu}>KID'S</li>
                           <li onClick={toggleMenu} onMouseEnter={enterMenu}>DEALS</li> 
                        </ul>                     
                    
                     {props.location.pathname === '/tshirts' ? <input className='search-input' value={searchInput} placeholder="Search name or max-price" onChange={e => handleChange(e)} /> : null }
                     {<input className='search-input' value={searchInput} placeholder="Search" onChange={e => handleChange(e)} />}
                     </div>
                  : <h2>All Inventory</h2>}
               </div>
               <div className="desktopDropdownInstanceContainer">
                  <DropdownMenu dropdownActive={ dropdownActive } onMouseEnter={ enterMenu } onMouseLeave={ leaveMenu } toggleMenu={toggleMenu}/>
               </div>
            </div>
         </div>
    )
 }



export default withRouter(Header)