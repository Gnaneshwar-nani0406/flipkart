import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Customer_login = () => {
  const nav = useNavigate()
  const [login_data, set_data] = useState({
    Username: '',
    Password: ''
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const Username = localStorage.getItem('Username')
  const Password = localStorage.getItem('Password')

  const validateForm = () => {
    const newErrors = {}

    if (!login_data.Username.trim()) {
      newErrors.Username = 'Username is required'
    }

    if (!login_data.Password.trim()) {
      newErrors.Password = 'Password is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const login_submit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      if (String(login_data.Username) === String(Username) && String(login_data.Password) === String(Password)) {
        localStorage.setItem('isLoggedIn', 'true')
        alert('Login successful')
        nav('/home')
      } else {
        alert('Invalid username or password')
      }
      setIsLoading(false)
    }, 400)
  }

  return (
    <div className='flipkart-login-page'>
      <div className='flipkart-login-box'>
        <div className='flipkart-login-info'>
          <div>
            <h1>Login</h1>
            <p>Get access to your Orders, Wishlist and Recommendations</p>
          </div>
          <img
            src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png'
            alt='Shopping illustration'
          />
        </div>

        <form className='flipkart-login-form' onSubmit={login_submit}>
          <div className='flipkart-field'>
            <input
              type='text'
              id='username'
              name='Username'
              value={login_data.Username}
              onChange={(e) => {
                set_data({ ...login_data, [e.target.name]: e.target.value })
                if (errors.Username) {
                  setErrors({ ...errors, Username: '' })
                }
              }}
              className={errors.Username ? 'input-error' : ''}
              placeholder='Enter Email/Mobile number'
            />
            {errors.Username && <span className='error-text'>{errors.Username}</span>}
          </div>

          <div className='flipkart-field'>
            <input
              type='password'
              id='password'
              name='Password'
              value={login_data.Password}
              onChange={(e) => {
                set_data({ ...login_data, [e.target.name]: e.target.value })
                if (errors.Password) {
                  setErrors({ ...errors, Password: '' })
                }
              }}
              className={errors.Password ? 'input-error' : ''}
              placeholder='Enter Password'
            />
            {errors.Password && <span className='error-text'>{errors.Password}</span>}
          </div>

          <p className='flipkart-terms'>
            By continuing, you agree to Flipkart's <a href='https://www.flipkart.com/pages/terms' target='_blank' rel='noreferrer'>Terms of Use</a> and <a href='https://www.flipkart.com/pages/privacypolicy' target='_blank' rel='noreferrer'>Privacy Policy</a>.
          </p>

          <button type='submit' className='flipkart-login-button' disabled={isLoading}>
            {isLoading ? 'LOGIN...' : 'Login'}
          </button>

          <Link to='/registration' className='flipkart-create-link'>
            New to Flipkart? Create an account
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Customer_login
