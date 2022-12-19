import "./Approval.css";
import {useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
function Approval({eventpool,userEmail,setEventpool,events,setEvents})
{
    const navigate = useNavigate();
    const [approval,setApproval] = useState([]);

    useEffect(()=>{
        let item = eventpool.filter((ele)=>{
           return ((ele.creatorid==userEmail) && (ele.status=="pending"));
        })
        setApproval(item);
  
    },[])

    function approve(poolid,requestorid,requestorname)
    {
       
        let arr = [];
        let arre = [];  // for event updation
       eventpool.map((ele)=>{
            if((ele.id==poolid) && (ele.requestorid==requestorid))
            {
               let obj = {id:ele.id,requestorid:ele.requestorid,requestorname:ele.requestorname,eventname:ele.eventname,status:"approved",creatorid:ele.creatorid}
                arr.push(obj);
// updating event information
                events.map((x)=>{
                    if(x.eventid==obj.eventid)
                    {
                       let entry = parseInt(x.playerenrolled)+1;
                       let enrolly = x.enrolly.push(requestorname)
                       let obj1 = {eventid:x.eventid,eventname:x.eventname,playerlimit:x.playerlimit,playerenrolled:entry,eventdate:x.eventdate,creatorname:x.creatorname,creatoremail:x.creatoremail,enrolly:enrolly}
                       arre.push(obj1);
                    }
                    else
                    {
                        arre.push(x);
                    }
                })

                setEvents(arre);
            }
            else
            {
                arr.push(ele)
            }
       })
       
       
       setEventpool(arr);
       alert("Request Approved")

    }

   function reject(poolid,requestorid,requestorname)
   {
     let obj = eventpool.filter((ele)=>{
        return !(ele.id==poolid) && (ele.requestorid==requestorid);
     })

     setEventpool(obj);
     alert("Request Rejected");
   }
    return(
        <div className="approval">
            <h1>Pending For Approval</h1>
            
            <div className="appItem">
            <div className="item"><b>Event Name</b></div>
            <div className="item"><b>Requestor Id</b></div>
            <div className="item"><b>Request Name</b></div>
            <button onClick={()=>navigate('/Login/Dashboard')}>Back</button>
            </div>
            
            {
                approval.map((ele)=>
                <div className="appItem">
                  <div className="item">{ele.eventname}</div>
                  <div className="item">{ele.requestorid}</div>
                  <div className="item">{ele.requestorname}</div>
                  <button onClick={()=>{approve(ele.id,ele.requestorid,ele.requestorname)}}>Approve</button>
                  <button onClick={()=>{reject(ele.id,ele.requestorid,ele.requestorname)}}>Reject</button>
                </div>
                  
             )
            }
            
        </div>
    );
}

export default Approval;