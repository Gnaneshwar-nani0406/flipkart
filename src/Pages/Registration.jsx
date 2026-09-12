import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Registration = () => {
  const nav = useNavigate()
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const [Customer, setCustomer] = useState({
    Fullname: '',
    Mobile: '',
    Username: '',
    Password: '',
    ConfirmPassword: ''
  })

  const validateForm = () => {
    const newErrors = {}

    if (!Customer.Fullname.trim()) {
      newErrors.Fullname = 'Full name is required'
    }

    if (!Customer.Mobile.trim()) {
      newErrors.Mobile = 'Mobile number is required'
    } else if (!/^\d{10}$/.test(Customer.Mobile)) {
      newErrors.Mobile = 'Mobile number must be 10 digits'
    }

    if (!Customer.Username.trim()) {
      newErrors.Username = 'Username is required'
    } else if (Customer.Username.length < 4) {
      newErrors.Username = 'Username must be at least 4 characters'
    }

    if (!Customer.Password.trim()) {
      newErrors.Password = 'Password is required'
    } else if (Customer.Password.length < 6) {
      newErrors.Password = 'Password must be at least 6 characters'
    }

    if (Customer.Password !== Customer.ConfirmPassword) {
      newErrors.ConfirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const submitform = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      localStorage.setItem('Fullname', Customer.Fullname)
      localStorage.setItem('Mobile', Customer.Mobile)
      localStorage.setItem('Username', Customer.Username)
      localStorage.setItem('Password', Customer.Password)
      alert('Registration successful. Please sign in.')
      nav('/Customer_login')
      setIsLoading(false)
    }, 400)
  }

  const handleChange = (e) => {
    setCustomer({ ...Customer, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  return (
    <div className='flipkart-login-page'>
      <div className='flipkart-login-box flipkart-register-box'>
        <div className='flipkart-login-info'>
          <div>
            <h1>Looks like you're new here!</h1>
            <p>Sign up with your mobile number to get started</p>
          </div>
          <img
            src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png'
            alt='Shopping illustration'
          />
        </div>

        <form className='flipkart-login-form flipkart-register-form' onSubmit={submitform}>
          <div className='flipkart-field'>
            <input type='text' id='mobile' name='Mobile' value={Customer.Mobile} onChange={handleChange} className={errors.Mobile ? 'input-error' : ''} placeholder='Enter Mobile number' maxLength='10' />
            {errors.Mobile && <span className='error-text'>{errors.Mobile}</span>}
          </div>

          <div className='flipkart-field'>
            <input type='text' id='fullname' name='Fullname' value={Customer.Fullname} onChange={handleChange} className={errors.Fullname ? 'input-error' : ''} placeholder='Full Name' />
            {errors.Fullname && <span className='error-text'>{errors.Fullname}</span>}
          </div>

          <div className='flipkart-field'>
            <input type='text' id='username' name='Username' value={Customer.Username} onChange={handleChange} className={errors.Username ? 'input-error' : ''} placeholder='Email/Username' />
            {errors.Username && <span className='error-text'>{errors.Username}</span>}
          </div>

          <div className='flipkart-register-row'>
            <div className='flipkart-field'>
              <input type='password' id='password' name='Password' value={Customer.Password} onChange={handleChange} className={errors.Password ? 'input-error' : ''} placeholder='Password' />
              {errors.Password && <span className='error-text'>{errors.Password}</span>}
            </div>

            <div className='flipkart-field'>
              <input type='password' id='confirmpassword' name='ConfirmPassword' value={Customer.ConfirmPassword} onChange={handleChange} className={errors.ConfirmPassword ? 'input-error' : ''} placeholder='Confirm Password' />
              {errors.ConfirmPassword && <span className='error-text'>{errors.ConfirmPassword}</span>}
            </div>
          </div>

          <p className='flipkart-terms'>
            By continuing, you agree to Flipkart's <a href='https://www.flipkart.com/pages/terms' target='_blank' rel='noreferrer'>Terms of Use</a> and <a href='https://www.flipkart.com/pages/privacypolicy' target='_blank' rel='noreferrer'>Privacy Policy</a>.
          </p>

          <button type='submit' className='flipkart-login-button' disabled={isLoading}>
            {isLoading ? 'CONTINUING...' : 'Continue'}
          </button>

          <Link to='/Customer_login' className='flipkart-existing-link'>
            Existing User? Log in
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Registration
