import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import './DropDownMenu.css';


const DropdownMenu = ({ toggleMenu, dropdownActive, onMouseEnter, onMouseLeave }) => {

    return (
      <div className="mainDesktopDropdownMenu" style={ dropdownActive ? {display: 'none'} : null} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="desktopDropdownLinksContainer">
          <section className="sections">
            <h5 className="section-title" onClick={toggleMenu}>SHOP ALL MEN'S</h5>
            <p className="dropDownLinks" onClick={toggleMenu}>Suits</p>
            <Link to='/tshirts'><p className="dropDownLinks" style={{textDecoration:'none', color:'black'}} onClick={toggleMenu}>T-Shirts</p></Link>
            <p className="dropDownLinks" onClick={toggleMenu}>Shirts 30-40% Off</p>
            <p className="dropDownLinks" onClick={toggleMenu}>Shoes</p>
            <p className="dropDownLinks" onClick={toggleMenu}>Jeans </p>
            <p className="dropDownLinks" onClick={toggleMenu}>Pants New Arrivals </p>
            <p className="dropDownLinks" onClick={toggleMenu}>Sweaters</p>
            <p className="dropDownLinks" onClick={toggleMenu}>Sport</p>
            <p className="dropDownLinks" onClick={toggleMenu}>Socks</p>
          </section>

          <section className="sections">
            <h5 className="section-title" onClick={toggleMenu}>SHOP ALL WOMEN'S</h5>
            <p className="dropDownLinks" onClick={toggleMenu}>Dresses</p>
            <p className="dropDownLinks" onClick={toggleMenu}>Coats & Jackets</p>
            <p className="dropDownLinks" onClick={toggleMenu}>Shoes</p>
            <p className="dropDownLinks" onClick={toggleMenu}>Jeans</p>
            <p className="dropDownLinks" onClick={toggleMenu}>Sweaters</p>
            <p className="dropDownLinks" onClick={toggleMenu}>Pants & Leggings</p>
            <p className="dropDownLinks" onClick={toggleMenu}>Shorts & Skirts </p>
            <p className="dropDownLinks" onClick={toggleMenu}>Swimwear 20-30% Off</p>
            <p className="dropDownLinks" onClick={toggleMenu}>Shop All</p>
          </section>

          <section className="sections">
            <h5 className="section-title" onClick={toggleMenu}>SHOP ALL KID'S</h5>
            <p className="dropDownLinks" onClick={toggleMenu}>Girls</p>
            <p className="dropDownLinks" onClick={toggleMenu}>Boys</p>
            <p className="dropDownLinks" onClick={toggleMenu}>Baby Shoes</p>
            <p className="dropDownLinks" onClick={toggleMenu}>Kid's Toys</p>
            <p className="dropDownLinks" onClick={toggleMenu}>Shop All</p>
            <p className="dropDownLinks" onClick={toggleMenu}>Dress Shop</p>
            <p className="dropDownLinks" onClick={toggleMenu}>Kids Accessories</p>
          </section>

          <section className="sections">
            <h5 className="section-title" onClick={ toggleMenu }>SHOP ALL DEALS</h5>
            <p className="dropdownLinks" onClick={toggleMenu}>Men's Jeans 30% Off</p>
            <p className="dropdownLinks" onClick={toggleMenu}>Women's Shoes Up to 50% Off}</p>
            <p className="dropdownLinks" onClick={toggleMenu}>Dayly Deals</p>
            <p className="dropdownLinks" onClick={toggleMenu}>All Deals </p>
          </section>
        </div>
        <div className="freeReturns dropdownFreeReturnssss"><p>5-Day Free Shepping and Free Returns </p></div>
        </div>
      )
    }

    export default withRouter(DropdownMenu); 