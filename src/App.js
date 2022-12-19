import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import Createevent from './Components/Createevent/Createevent';
import EventDetails from './Components/EventDetails/EventDetails';
import Enrollment from './Components/Enrollment/Enrollment';
import Approval from './Components/Approval/Approval';

import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { useState,useEffect } from 'react';

function getLocalStorage()
{
    let auth = localStorage.getItem('auth');
    if(auth)
    {
        return JSON.parse(auth);
    }
    else
    {
        return [];
    }
}

function getSports()
{
    let event = localStorage.getItem('sports');
    if(event)
    {
        return JSON.parse(event);
    }
    else
    {
        return [];
    }
}

function getEventpool()
{
    let gamepool = localStorage.getItem('pool');
    if(gamepool)
    {
        return JSON.parse(gamepool);
    }
    else
    {
        return [];
    }
}

function App() {
  const [userName,setUserName] = useState("");
  const [userEmail,setUserEmail] = useState("");
  const [user,setUser] = useState(getLocalStorage()); 
  const [events,setEvents] = useState(getSports());
  const [eventpool,setEventpool] = useState(getEventpool());
  const [eventId,setEventid] = useState();

  useEffect(()=>{
    localStorage.setItem('auth',JSON.stringify(user));
 },[user])

 useEffect(()=>{
  localStorage.setItem('sports',JSON.stringify(events));
 },[events])
 
 useEffect(()=>{
  localStorage.setItem('pool',JSON.stringify(eventpool));
 },[eventpool])

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login setUserName={setUserName} setUserEmail={setUserEmail} user ={user}/>} exact />
            <Route path='/Register' element={<Register user={user} setUser={setUser}/>} />
            <Route path='/Login/Dashboard' element={<Dashboard events={events} setEventid={setEventid}/>} />
            <Route path='/Login/Dashboard/Createevent' element={<Createevent events={events} setEvents={setEvents} userName={userName} userEmail={userEmail}/>} />
            <Route path='/Login/Dashboard/EventDetails' element={<EventDetails events={events} eventId={eventId} userEmail={userEmail} userName={userName} eventpool={eventpool} setEventpool={setEventpool}/>} />
            <Route path='/Login/Dashboard/Enrollment' element={<Enrollment eventpool={eventpool} userEmail={userEmail}/>} />
            <Route path='/Login/Dashboard/Approval' element={<Approval eventpool={eventpool} userEmail={userEmail} setEventpool={setEventpool} events={events} setEvents={setEvents}/>} />

          </Routes>
        </BrowserRouter>
        
      </div>
  );
}

export default App;
