import React from 'react'
import styles from "./Navbar.module.css"

export const Navbar=()=> {
  return (
    <nav className='style.navbar'>
        <a className='title.navbar' href="">Portfolio</a>
        <div className='style.menu'>
            <ul className='style.menuItems'>
                <li><a href="">About</a></li>
                <li><a href="">Experience</a></li>
                <li><a href="">Projects</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
