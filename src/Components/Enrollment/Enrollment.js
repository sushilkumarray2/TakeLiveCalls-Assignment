import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Enrollment.css";

let backup = [];
function Enrollment({eventpool,userEmail})
{
    const navigate = useNavigate();
    const [requestedEvent,setRequestevent] = useState([]);
    const [search,setSearch] = useState("");
    let request = [];

    useEffect(()=>{
        let item = eventpool.filter((ele)=>{
          return ele.requestorid===userEmail;
        })
        backup = item;
        setRequestevent(item);
    },[])   
  function searchItem()
  {
    if(search=="")
    {
        setRequestevent(backup);   
    }
    else
    {
        let item = backup.filter((ele)=>{
            return ele.eventname===search;
        })
        if(item.length==0)
        {
            alert("No result available with search criteria")
        }
        else
        {
            setRequestevent(item);
        }   
    }
    
  }

    return(
        <div className="enrollment">
           <h1>Requested Events List</h1>
           <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Please Enter event name"/>
           <button onClick={searchItem}>Search</button>
           <button onClick={()=>navigate('/Login/Dashboard')}>Back</button>
           {
            requestedEvent.map((ele)=>
                <div className="card">
                    <div class="event">Event:<b>{ele.eventname}</b> </div>
                    <div class="event">Status:<b>{ele.status}</b></div>
                </div>
                
              )
           }
        </div>
    );
}

export default Enrollment;