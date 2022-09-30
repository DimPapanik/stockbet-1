import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './sidebar.css'

const Sidebar = ({sidebarIsOpen, setSidebarIsOpen}) =>
{
    const ref = useRef()

    useEffect(()=>{
        gsap.to(ref.current, {duration:0.2, x:0, ease: "expo.out"})
    },[])

    return(
        <div className="sidebar" ref={ref}>
            <button className='close-sidebar-btn' onClick={()=>{setSidebarIsOpen(!sidebarIsOpen)}}>X</button>
        </div>
    )
}

export default Sidebar