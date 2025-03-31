import React, { useEffect, useState } from 'react'
import './Signup.css'
const Signup = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [email2, setemail2] = useState("")
    const [pass, setpass] = useState("")
    const [pass2, setpass2] = useState("")
    const [final, setfinal] = useState([])


function f2(){
     const p=[...final,{name,email,email2,pass,pass2}]
     setfinal(p)
    
  console.log(p)

     localStorage.setItem("u1",JSON.stringify(p))
   
}

useEffect(()=>{ const a=JSON.parse(localStorage.getItem("u1"))

if(a){
    setfinal(a)
}

},[])


   return (
        <>
            <div className="m1">
                <div className="signin">
                    <h1 style={{ fontWeight: "lighter" }}>Create Account</h1>
                    <br />
                   <div className="allinput">
                    
                     <input type="text" placeholder='Your Name' className='sign-inp' onChange={(e)=>setname(e.target.value)}/>
                  
                    <input type="text"  placeholder='Email'className='sign-inp'  onChange={(e)=>setemail(e.target.value)} />
                   
                    <input type="text" placeholder='Email Again'className='sign-inp'  onChange={(e)=>setemail2(e.target.value)} />
                  
                    <input type="text" placeholder='Password' className='sign-inp'  onChange={(e)=>setpass(e.target.value)} />
                  
                    <input type="text" placeholder='Password Again'className='sign-inp'  onChange={(e)=>setpass2(e.target.value)}/>

                   </div>
                    <div className="signup-btn">
                        <button onClick={f2}>Create your amazon account</button>
                    </div>
                    <div>
                        <h4>Already have an account?Sign in </h4>
                    </div>

                </div>
            </div>




        </>
    )
}

export default Signup