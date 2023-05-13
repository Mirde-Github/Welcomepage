
import React from 'react';
import './App.css';
import Time from './Time';




function App() {
  let name = "Mirde B. A."
  let year = new Date().getFullYear()
  let curtime = new Date()
  let dates = curtime.toLocaleDateString()
  let days = curtime.getDay();

  let arr = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let fixday;
  for (let i = 0; i < arr.length; i++) {
    if (days === i) {
      fixday = arr[i];
    }
  }
  let months = curtime.getMonth()

//greetings code
let currenttime= curtime.getHours();
let text="";
const csstext={}
if(currenttime>=1 &&  currenttime<12){
 text="Good Morning"
 csstext.color="red";
}
else if(currenttime>=12 && currenttime<19){
text="Good AfterNoone"
csstext.color="green"
}
else{
  text="Good Night"
  csstext.color="yellow"
}

 
    return (
    <>
      <h1 style={{ textAlign: 'center', color: "red", fontSize:"50px" }}>Welcom To This <span style={{ color: "green" }}>{year} Year</span>  {name}</h1>

      <p style={{ textAlign: "end", marginRight: "50px",fontSize:"30px" }}>Date:{dates}</p>
      <ul>
        <li style={{textAlign:"center", fontSize:"40px",listStyle:"none"}}>Today is {fixday}</li>
        <li style={{textAlign:"center", fontSize:"40px", listStyle:"none"}}>The Month is {months}</li>

      </ul>
      <h2 style={{textAlign:"center", fontSize:"40px"}} >The local time is ....</h2>

      <div style={{margin:"Auto"}}>
        <p style={{textAlign:"center", fontSize:"40px", backgroundColor:"yellow"}} ><Time/></p>
      </div>
   

  
   
    <h2 style={{textAlign:"center", fontSize:"40px"}} >Hello Mirde B. A. <span style={csstext}>{text}</span></h2>
  
    </>

  );
}

export default App;
