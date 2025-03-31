import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <>

      <div className="l1">
       <div className="l1txt">
       <h1>Login</h1><br />
       <h3>Get access to your Orders ,<br />Wishlist and Recommendations</h3>
       </div>
      </div>
      <div className="l2">
        <input type="text" placeholder='Enter Email/Mobile number' className='inplogin' />
       <div className="logbtn-txt">
       <div className="logtxt">
          <h5>By continuing,you agree to Flipkart's Terms of use and Privacy Policy</h5>
        </div>
        <div className="logbtn">
          <button>Request OTP</button>
        </div>
       </div>
       <div className="ntf">
        <h4>New to Flipkart? Create an account</h4>
       </div>
        
      </div>


    </>
  )
}

export default Login