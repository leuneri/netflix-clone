import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false)

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    // As we scroll, we have an event listener for if we scrolled too much
    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

  return (
    // Only have nav_black bar if show is true
    <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_contents">
            <img 
                className='nav_logo'
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="Netflix Logo" />
            <img 
                className='nav_avatar' 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                alt="Avatar" />
        </div>
    </div>
  )
}

export default Nav