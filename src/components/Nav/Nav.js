import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import './nav.css'

import {FaBars} from 'react-icons/fa'
import logo from '../../resources/logo-yellow.png'
import NavUser from './NavUser'

const LinkDisabled = () =>
{
    return(
        <div className="link-disabled">
            <button>Προγνωστικά</button>
        </div>
    )
}

const Nav = ({sidebarIsOpen, setSidebarIsOpen, currentUser, setCurrentUser}) =>
{
    const navRef = useRef()

    useEffect(()=>
    {
        // const wheelEvent = window.addEventListener("wheel", (e)=>
        // {
        //     if(e.deltaY === 150){
        //         gsap.to(navRef.current, {duration:0.5, y:"-100%"})
        //     }
        //     else if(e.deltaY === -150){
        //         gsap.to(navRef.current, {duration:0.5, y:0})
        //     }
        // })

        // window.removeEventListener("wheel", wheelEvent)
    },[])

    return(
        <nav className="nav" ref={navRef}>
            <Link to="/" className="logo">
                <img src={logo} alt="logo" />
            </Link>

            <div className="nav-right">
                <div className="nav-links">
                    {currentUser? <Link to="/tips" className='nav-link'>Προγνωστικά</Link> : <LinkDisabled />}
                    <Link className='nav-link'>Νέα</Link>
                    <Link to="/contact" className='nav-link'>Επικοινωνία</Link>
                </div>

                {!currentUser? 
                <div className="nav-user">
                    <Link to="/login" className='login-btn'></Link>
                    <Link to="/register" className='register-btn'>Εγγραφή</Link>
                </div>
                :<NavUser currentUser={currentUser} setCurrentUser={setCurrentUser} />
                }
            </div>

            <button className='menu-btn' onClick={()=>{setSidebarIsOpen(!sidebarIsOpen)}}>
                <FaBars />
            </button>
        </nav>
    )
}

export default Nav