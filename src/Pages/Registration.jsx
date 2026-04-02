import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Registration = () => {
  const nav=useNavigate()

  const [Customer, setCustomer] = useState({
    Fullname:'',
    Mobile:'',
    Username:'',
    Password:'',
  })


  const submitform=(e)=>{
    e.preventDefault()
    localStorage.setItem('Fullname',Customer.Fullname)
    localStorage.setItem('Mobile',Customer.Mobile)
    localStorage.setItem('Username',Customer.Username)
    localStorage.setItem('Password',Customer.Password)
    nav('/Customer_login')
  }

  return (
    <div>

        <div className='col-6 offset-3 border border-2 rounded rounded-5 mt-5 p-5'>
                    <center><h4>CUSTOMER REGISTRATION</h4></center>
                    <form onSubmit={submitform}>
                       <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Full Name</label>
                <input type="text" name='Fullname' onChange={(e)=>setCustomer({...Customer,[e.target.name]:e.target.value})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
             <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Mobile</label>
                <input type="text" name='Mobile' onChange={(e)=>setCustomer({...Customer,[e.target.name]:e.target.value})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">User Name</label>
                <input type="text" name='Username' onChange={(e)=>setCustomer({...Customer,[e.target.name]:e.target.value})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" name='Password' onChange={(e)=>setCustomer({...Customer,[e.target.name]:e.target.value})} class="form-control" id="exampleInputPassword1" />
            </div>
            <div className='text-center'>
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            <p className='text-center'>Go to login page <a href="/Customer_login">Click here</a> </p>
            </form>
                </div>
    </div>
  )
}

export default Registration