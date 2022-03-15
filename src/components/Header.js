import React, {useState, useContext} from 'react'
import Menu from './svg/align-justify-solid.svg'
import Close from './svg/xmark-solid.svg'
import Cart from './svg/cart-shopping-solid.svg'
import {Link} from 'react-router-dom';
import {DataContext} from './DataProvider'


function Header() {
  const [menu, setMenu] = useState(false)
  const value = useContext(DataContext)
  const [cart] = value.cart

  const toggleMenu = () =>{
    setMenu(!menu)
  }
  const styleMenu = {
    left: menu ? 0 : "-100%"
  }



  return (
    <header>
        <div className="menu" onClick={toggleMenu}>
          <img src={Menu} alt="" width="30" />
        </div>
    
        <div className="logo">
         <h1><Link to="/products">Citizen</Link></h1>
        </div>
        <ul style={styleMenu}>
          <li><Link to="/">home</Link></li>
          <li><Link to="/products">products</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/contact">contact</Link></li>
          <li><Link to="/">login / register</Link></li>
          <li onClick={toggleMenu}>
            <img src={Close} alt="" width="30" className="menu"/>
          </li>
        </ul>
        <div className="cart-icon">
          <span>{cart.length} </span>
          <Link to="/cart">
            <img src={Cart} alt="" width="30"/>
          </Link>
        </div>
        
      </header>
  )
}

export default Header