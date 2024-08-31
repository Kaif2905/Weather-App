import { useState } from 'react';
import  Data from './Login.json';
import Weather from './Weather';



function Login()
{
 
  var [x,setX]=useState({});
 var [y,setY]=useState({});



  function changex(e)
  { 
    setX(e.target.value);
  }


  function changey(e)
  { setY(e.target.value);
  }


function check()
{ var t=0;
 Data.login.map((e)=>
{
if(e.id==(x) && e.password==(y))
{ 
 window.location.assign('/Weather')
  t=1;
} 

});
 
if(t!=1){
  alert("Wrong ID or Password !!!");
}
 
}

 




return <div  className="box1">
  <h1>Weather App</h1>
  <input type="text" placeholder="ID"   onChange={changex}></input>
  <input type="password" placeholder="Password"  onChange={changey} ></input>

   <input  type="button" value={"Login"} onClick={check}></input>  
</div>
 
}
export default Login;