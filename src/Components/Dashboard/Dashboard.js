import { useNavigate } from "react-router-dom";
import {useState} from "react";
import "./Dashboard.css";
function Dashboard({events,setEventid})
{
  const navigate = useNavigate();
  const [game,setGame] = useState(events);
  const [eventName,setEventname] = useState("");

  function searchEvent()
  {
    
    if(eventName=="")
    {
        setGame(events);
    }
    else
    {
        let obj = game.filter((ele)=>{
                return ele.eventname==eventName;
        })
       
        if(obj)
        {
            setGame(obj);
            
        }
        else
        {
            alert("No Event found with Search Criteria");
        }
    }
  }

  function showDetails(id)
  {
    setEventid(id);
    navigate("/Login/Dashboard/EventDetails")
  }
  
    return(
        <div className="dashboard">
            <div>
            <button onClick={()=>navigate('/Login/Dashboard/Approval')}>Pending For Approval</button>
            <button onClick={()=>navigate('/Login/Dashboard/Enrollment')}>Requested Event</button>
            <button onClick={()=>navigate('/Login/Dashboard/Createevent')}>Create Event</button>
            <button onClick={()=>navigate('/')}>Log Out</button>
            </div>
            <div>
                <input type="text" value={eventName} placeholder="Enter event name" onChange={(e)=>setEventname(e.target.value)}></input>
                <button onClick={searchEvent}>Search</button>
            </div>

            {
                game.map((ele)=>
                   <div className="card">
                    <div className="event" key={ele.id}>{ele.eventname}</div>
                    <button onClick={()=>{showDetails(ele.eventid)}}>View</button>
                   </div>
                )
            }
        </div>
    );

}

export default Dashboard;