import React from 'react';
import '../styles/Nav.css';
import {Link} from 'react-router-dom';


const NavBar = () => {
  return (
    <div className="nav">
      
      <div className="logo">

          <Link to="/">
          <img id="logoImage" src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg" alt="logoImage"/>
          
          </Link>
</div>
        <Link className="navlinks" to="">Xiaomi Phones</Link>
        <Link className="navlinks" to="">Redmi Phones</Link>
        <Link className="navlinks" to="">TV</Link>
        <Link className="navlinks" to="">Laptops & Tablets</Link>
        <Link className="navlinks" to="">Fitness</Link>
        <Link className="navlinks" to="">Home</Link>
        <Link className="navlinks" to="">Audio</Link>

      
      <div className="searchbar">
          <input type="text" placeholder="Search Products"></input>
      </div>


    </div>
  )
}

export default NavBar
