import React from 'react'
import "./Login2.css"
const Login2 = () => {
  return (
    <>
      <div className="m1">

        <div className="m2">
        <h1>Login</h1>
        <br />
        {/* <h4>Email Phone Or Mobile Number</h4> */}
        <input type="text" className='inp'  placeholder='Email Phone Or Mobile Number'/>
        <br />
        {/* <h4> Password</h4> <h5>Forgot Password</h5> */}
        <input type="text" className='inp' placeholder='Password'/>
        <br />
        <button className='log2btn1'>Login</button>

        <h5 className='nta'>New to Amazon</h5>
        <button className='log2btn2'> I Am A New Customer</button>
        </div>
      </div>






    </>
  )
}

export default Login2