import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Customer_login = () => {
     const nav = useNavigate()
        
    const [login_data, set_data] = useState({
            Username:'',
            Password:''

        })          
     
      const Fullname=localStorage.getItem('Fullname')
      const Mobile=localStorage.getItem('Mobile')
      const Username=localStorage.getItem('Username')
      const Password=localStorage.getItem('Password')

      const login_submit=(e)=>{
        e.preventDefault()
        if (String(login_data.Username)===String(Username) & String(login_data.Password)===String(Password)) {
            alert('Login Successfull')
            nav('/home')
        }
      }


  return (
    <div className='login-container'>
               <div className="login-box">
                    <center><h4>CUSTOMER LOGIN</h4></center>
                    <form onSubmit={login_submit}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">User Name</label>
                <input type="text" name='Username' onChange={(e)=>set_data({...login_data,[e.target.name]:e.target.value})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" name='Password' onChange={(e)=>set_data({...login_data,[e.target.name]:e.target.value})} class="form-control" id="exampleInputPassword1" />
            </div>
            <div className='text-center'>
                
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            <p className='text-center'>Go to registration page <a href="/Registration">Click here</a> </p>
            </form>
                </div>
    </div>
  )
}

export default Customer_login