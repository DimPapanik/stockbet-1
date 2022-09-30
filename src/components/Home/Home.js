import { useState } from 'react'
import './home.css'

import {AiOutlineCaretDown} from 'react-icons/ai'

import Nav from '../Nav/Nav'
import HomeHeader from './HomeHeader'
import HomeSection from './HomeSection'
import HomeSectionTwo from './HomeSectionTwo'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import Payments from './Payments'
import Tips from '../Tips/Tips'

const Home = ({sidebarIsOpen, setSidebarIsOpen, currentUser, setCurrentUser, tips}) =>
{
    return(
        <div className="home">
            <Nav sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} currentUser={currentUser} setCurrentUser={setCurrentUser} />
            {sidebarIsOpen? <Sidebar sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} /> : ""}
            <HomeHeader currentUser={currentUser} />
            <HomeSection />
            <Tips currentUser={currentUser} tips={tips} />
            {/* <HomeSectionTwo /> */}
            <Payments />
            <Footer />

            <div className="scroll-wrapper"><AiOutlineCaretDown /></div>
        </div>
    )
}

export default Home