import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import {FaUserCircle} from 'react-icons/fa'
import {IoMdMail} from 'react-icons/io'

const NavUser = ({currentUser, setCurrentUser}) =>
{
    const navigate = useNavigate()

    const [userIconClicked, setUserIconClicked] = useState(false)

    const handleLogout = () =>{
        localStorage.removeItem('currentUser')
        setCurrentUser(null)
        navigate("/", {replace: true})
    }

    return(
        <div className="nav-user-logged">
            <p>Καλωσόρισες <span>{currentUser.name}</span></p>

            {/* <IoMdMail className='nav-user-mail-icon' /> */}
            
            <div className="nav-user-wrapper">
                <button onClick={()=>{setUserIconClicked(!userIconClicked)}}><FaUserCircle className='nav-user-icon' /></button>

                {userIconClicked?
                <div className="nav-user-options">
                    <div className="nav-options-info">
                        <p>{currentUser.name}</p>
                        <small>{currentUser.email}</small>
                    </div>

                    <div className="nav-options-buttons">
                        <button>Tips</button>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
                :""}
            </div>
        </div>
    )
}

export default NavUser