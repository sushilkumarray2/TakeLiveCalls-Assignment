import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "./Createevent.css";
function Createevent({events,setEvents,userName,userEmail})
{  
    const navigate = useNavigate();
    const[name,setName] = useState("");
    const[limit,setLimit] = useState("");
    const[date,setDate] = useState();
    const[desc,setDesc] = useState("");
    function submitEvent()
    {
      if(name && limit && date && desc)
      {
        let len = events.length+1;
        let id = "eventid"+len;
        let obj = {eventid:id,eventname:name,playerlimit:limit,playerenrolled:0,eventdate:date,creatorname:userName,creatoremail:userEmail,description:desc,enrolly:[]};
        setEvents([...events,obj]);
        alert("Events Enter Successfully...")
         navigate('/Login/Dashboard');
      }
      else
      {
        alert("Please Enter all details");
      }
      

    }
    return(
        <div className="enterevent">
         <input type="text" name="event" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Event Name"></input>
         <input type="text" name="limit" value={limit} onChange={(e)=>setLimit(e.target.value)} placeholder="Enter player limit"></input>
         <input type="date" name="date" value={date} onChange={(e)=>setDate(e.target.value)} placeholder="Enter Date of Event"></input>
         <input type="textarea" name="textarea" value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Enter Description of Event"></input>
         <button className="button" onClick={submitEvent}>Submit</button>
         <button className="button" onClick={()=>navigate('/Login/Dashboard')}>Back</button>
        </div>
    );
}

export default Createevent;