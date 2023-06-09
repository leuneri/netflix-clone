import React, { useState, useEffect } from 'react'
import './Nav.css'
import { useNavigate } from "react-router-dom"

function Nav() {
    const [show, handleShow] = useState(false)
    const navigate = useNavigate()

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
            // TODO: change up history("../") to always just reload homepage (images change on homepage too)
                onClick={() => navigate("../")}
                className='nav_logo'
                src="/Images/netflix_logo.png"
                alt="Netflix Logo" />
            <img 
            // TODO: change up history("./profile") to always just reload profile (bug if press profile twice)
                onClick={() => navigate("/profile")}
                className='nav_avatar' 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                alt="Avatar" />
        </div>
    </div>
  )
}

export default Nav