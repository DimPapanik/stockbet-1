import { useRef,use, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './login.css'

import {IoMdMail} from 'react-icons/io'
import {AiFillEye} from 'react-icons/ai'
import logo from '../../resources/logo-yellow.png'

const Login = ({users, setCurrentUser}) =>
{
    // Navigation
    const navigate = useNavigate()

    // State for input fields    
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    // Handle login form submission
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        
        const userFound = users.find( user => user.email === email)

        if(userFound){
            if(userFound.password === pass){
                setCurrentUser(userFound)

                localStorage.setItem('currentUser', JSON.stringify(userFound))
                
                navigate("/", {replace: true})
            }
            else{
                console.log("wrong")
            }
        }
    }

    return(
        <div className="login">
            <div className="login-logo">
                <img src={logo} alt="logo" />
            </div>

            <form id='login-form' onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <div className="login-input">
                    <input 
                        id='login-email'
                        type="email" 
                        value={email} 
                        name='email'
                        onChange={({target})=>{setEmail(target.value)}}     
                        required
                    />
                    <IoMdMail />
                </div>

                <label htmlFor="pass">Password</label>
                <div className="login-input">
                    <input 
                        id='login-pass'
                        type="password" 
                        value={pass} 
                        name='pass'
                        onChange={({target})=>{setPass(target.value)}}
                        required
                    />
                    <AiFillEye />
                </div>
                
                <button>Είσοδος</button>
            </form>

            <div className="login-form-register">
                <p>Δεν έχεις λογαριασμό?</p>
                <Link to="/register" className='login-register-btn'>Κάνε Εγγραφή</Link>
            </div>

            <div className="login-forgot-pass">
                <button>Ξέχασες τον κωδικό σου?</button>
            </div>
        </div>
    )
}

export default Login