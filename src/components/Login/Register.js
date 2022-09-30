import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userService from '../../services/userService'

import {MdOutlinePersonPin} from 'react-icons/md'
import {IoMdMail} from 'react-icons/io'
import {BiLockAlt} from 'react-icons/bi'

const Register = ({users, setUsers, setCurrentUser}) =>
{
    const navigate = useNavigate()

    // State for input fields
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if(password !== passwordCheck){
            console.log("password not matching")
        }
        else{
            const newUser = {
                name: `${fname} ${lname}`,
                email: email,
                password: password
            }

            userService.newUser(newUser)
            .then((response)=>{
                setCurrentUser(response.data)
            })
            .catch((error)=>{
                console.log(error)
            })
        }

        navigate("/", {replace: true})
    }

    return(
        <div className="register">
            <div className="register-text-wrapper">
                <h1 className='register-title'>Δημιούργησε τον λογαριασμό σου</h1>
                <p>Έχεις ήδη λογαριασμό? <Link to="/login" className="login-register-btn">Κάνε είσοδο</Link></p>
            </div>

            <div className="register-form-wrapper">
                <form id="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="">Όνοματεπώνυμο</label>
                    <div className="register-form-name">
                        <div>
                            <input 
                            type="text" 
                            name='fname'
                            value={fname}
                            required
                            onChange={({target})=>{setFname(target.value)}}
                            />
                            <MdOutlinePersonPin />
                        </div>

                        <div>
                            <input 
                            type="text" 
                            name='lname'
                            value={lname}
                            required
                            onChange={({target})=>{setLname(target.value)}}
                            />
                            <MdOutlinePersonPin />
                        </div>
                    </div>

                    <label htmlFor="email">Email</label>
                    <div className="register-input">
                        <input 
                            type="email" 
                            name="email" 
                            value={email}  
                            required
                            onChange={({target})=>{setEmail(target.value)}}
                        />
                        <IoMdMail />
                    </div>
                    
                    <label htmlFor="pass">Κωδικός</label>
                    <div className="register-input">
                        <input 
                            type="password" 
                            name='pass' 
                            value={password}
                            required
                            onChange={({target})=>{setPassword(target.value)}}
                        />
                        <BiLockAlt />
                    </div>

                    <label htmlFor="pass">Κωδικός</label>
                    <div className="register-input">
                        <input 
                            type="password" 
                            name='pass' 
                            value={passwordCheck}
                            required
                            onChange={({target})=>{setPasswordCheck(target.value)}}
                        />
                        <BiLockAlt />
                    </div>

                    <button type="submit">Τέλος</button>
                </form>
            </div>
        </div>
    )
}

export default Register