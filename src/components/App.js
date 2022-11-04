
import React, { useState, useRef, useEffect } from 'react';
/**
 * @task :add validation to email, if email is not valid, if not valid email, dont allow to submit
 * @error_message :  "Email is invalid"  if email is wrong. (must be same message) 
 * 
 * 
 */

function App() {

   const fnameRef = useRef(null);
   const emailRef = useRef(null);
   const[error,setError]=useState('');
   const[data,setData]=useState({
    fname:undefined,
    lname:undefined
   });

  //  useEffect(()=>{
  //    console.log(fnameRef.current.value);
  //    console.log(fnameRef.current.id);
  //    console.log(fnameRef.current.name);
  //    fnameRef.current.focus();
  //  },[]);

  // useEffect(()=>{
  //   console.log(data);
  // },[data]);

  const EmailValidation=(input)=>{
   if(/^[a-zA-Z0-9]{4,50}@[a-zA-Z0-9]{3,20}\.[a-z]{2,5}$/.test(input)){
    setError('')
   }else{
    setError('Email is invalid')
   }
  }

  const onChangeHandler=()=>{
    setData({
      fname:fnameRef.current.value,
      lname:emailRef.current.value
    })
    if(emailRef.current.value){
      EmailValidation(emailRef.current.value);
    }
    
  };


 /**
  * code here
  */

  return(
    <div className="App">
      <h1>How About Them Apples</h1>
      <form>
        <fieldset>
          <label>
            <p>First Name</p>
            <input id='fname' name="name"  onChange={onChangeHandler} ref={fnameRef}/>
            <br></br>
            <p>Email</p>
            <input id='lname' name="name"  onChange={onChangeHandler} ref={emailRef}/>
            {error && <h2 style={{color: 'red'}}>{error}</h2>}
          </label>
        </fieldset>

        <button id='submit' disabled={data.lname && error==''?false:true} type="submit">Submit</button>
      </form>
      {
        data.fname != undefined && (
          <div>
          <h1>{data.fname}</h1>
          <h2>{data.lname}</h2>
          </div>
        )
      }
    </div>
  )
}


export default App;