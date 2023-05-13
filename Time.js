import React, { useState } from "react";

const Time=()=>{
    let times= new Date().toLocaleTimeString();
    const [ctime,settime]=useState(times)
    const updatetime=()=>{
        let newtime= new Date().toLocaleTimeString();
        settime(newtime);
    }
    setInterval(updatetime, 1000);// here we called function to update time every 1second and this 1000 means 1000milli second means 1 second

    return(
        <>
        <p>{ctime}</p>
        {/* <button onClick={updatetime}>Click</button> */}
        </>
    )
}
export default Time;