import React, { useEffect, useState } from 'react'
import './Nav.css'

const Nav = () => {

    const [show, handleShow] = useState(false);

    const showTransitionNav = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", showTransitionNav)
        return () => {
            window.removeEventListener("scroll", showTransitionNav)
        }
    }, [])


    return (
        <div className={`nav ${show && `nav__black`}`}>
            <div className='nav__contents'>
                <img className='nav__logo'
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt='' />

                <img className='nav__avatar'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                    alt='' />
            </div>
        </div>
    )
}

export default Nav