import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import userService from './services/userService';
import tipsService from './services/tipsService';
import './App.css';

// Import components
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Contact from './components/Contact/Contact';
import TipsPage from './components/Tips/TipsPage';

function App() 
{
  // State
  const [users, setUsers] = useState([])
  const [tips, setTips] = useState([])
  const [tipsUnsure, setTipsUnsure] = useState([])
  const [tipsTomorrow, setTipsTomorrow] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  // Effect for fetching the users from database
  useEffect(()=>
  {
    userService.getAll().then((response)=>
    {
      setUsers(response.data)
    })
  },[])

  // Effect for fetching tips from database
  useEffect(()=>{
    tipsService.getAll().then((response)=>{
      setTips(response.data)
    })
  },[])

    // Effect for fetching tips-unsure from database
    useEffect(()=>{
      tipsService.getAllUnsure().then((response)=>{
        setTipsUnsure(response.data)
      })
    },[])

      // Effect for fetching tips-tomorrow from database
  useEffect(()=>{
    tipsService.getAllTomorrow().then((response)=>{
      setTipsTomorrow(response.data)
    })
  },[])

  // Effect for current user
  useEffect(()=>{
    const localUser = JSON.parse(localStorage.getItem('currentUser'))

    if(localUser){
      setCurrentUser(localUser)
    }
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path='/' 
            element={<Home 
                        sidebarIsOpen={sidebarIsOpen} 
                        setSidebarIsOpen={setSidebarIsOpen} 
                        currentUser={currentUser} 
                        setCurrentUser={setCurrentUser} 
                        tips={tips}
                      />} 
            />

          <Route path='login' element={<Login users={users} setCurrentUser={setCurrentUser} />} />

          <Route path='register'  element={<Register users={users} setUsers={setUsers} setCurrentUser={setCurrentUser} />}/>

          <Route 
            path='/tips' 
            element={<TipsPage 
                        tips={tips} 
                        tipsUnsure={tipsUnsure}
                        tipsTomorrow={tipsTomorrow}
                        currentUser={currentUser} 
                        setCurrentUser={setCurrentUser} 
                      />}             
          />
          
          <Route path='/contact' element={<Contact currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
