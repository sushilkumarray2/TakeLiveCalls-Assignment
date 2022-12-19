import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import "./EventDetails.css"

function EventDetails({events,eventId,userEmail,userName,eventpool,setEventpool})
{

    const navigate = useNavigate();
    const[details,setDetails] = useState({});
    useEffect(()=>{
     let obj = events.find((ele)=>{
        return ele.eventid===eventId;
     })

     setDetails(obj);
    },[])

   function enrollmentRequest(eventid,eventname,userid,username,creatoremail)
   {
    
      let num = eventpool.length+1;
      let id = "poolid"+num;
      let obj = {id:id,eventid:eventid,requestorid:userid,requestorname:username,eventname:eventname,creatorid:creatoremail,status:"pending"};
      setEventpool([...eventpool,obj]);
      alert("Enrollment Request Sent")
   }

    return(
        <div className="details"> 
        <h1>Event's Details</h1>
        <div>
            <div className="desc">Name of Event:<b>{details.eventname}</b> </div>
            <div className="desc">Date of Event:<b>{details.eventdate}</b></div>
            <div className="desc">Number of Player:<b>{details.playerlimit}</b></div>
            <div className="desc">Organizer:<b>{details.creatorname}</b></div>
            <div className="desc">Description:<b>{details.description}</b></div>
        </div>
        <button onClick={()=>{enrollmentRequest(details.eventid,details.eventname,userEmail,userName,details.creatoremail)}}>Enroll</button>
        <button onClick={()=>navigate('/Login/Dashboard')}>Go To Back</button>

        </div>
    );
}

export default EventDetails;