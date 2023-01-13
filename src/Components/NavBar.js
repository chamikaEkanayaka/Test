import React from 'react'
import "./NavBarStyles.css"

function NavBar() {
  return (
    <>
      <nav>
        <a href="index.html">
        <img src={require("./evemlogo.png")} height="35px" alt="evem" id="evemlogo"/>
        </a>
        <div>
          <ul id="NavBarEl">
            <li><a href="index.html">HOME</a></li>
            <li><a href="index.html">EVENT</a></li>
            <li><a href="index.html">GALLERY</a></li>
            <li><input class="searchbar" type="text" placeholder="Search"></input></li>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default NavBar