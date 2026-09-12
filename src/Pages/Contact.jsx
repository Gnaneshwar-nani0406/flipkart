import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    address: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for contacting us. We will get back to you soon.')
    setFormData({ firstName: '', lastName: '', email: '', contact: '', address: '', message: '' })
  }

  return (
    <div className="contact-container">
      <header className="page-header">
        <div className="page-container">
          <h1>Contact Us</h1>
          <p>Send your order, return, or account question to our support team.</p>
        </div>
      </header>

      <main className="page-container content-grid">
        <aside className="info-card">
          <div className="info-list">
            <div className="info-item">
              <h4>Address</h4>
              <p>Flipkart Hyderabad Office<br />HITEC City, Madhapur<br />Hyderabad, Telangana - 500081</p>
            </div>
            <div className="info-item">
              <h4>Phone</h4>
              <p>+91 40 4567 8900<br />+91 40 4567 8910</p>
            </div>
            <div className="info-item">
              <h4>Email</h4>
              <p>hyderabad.support@flipkart.com<br />help@flipkart.com</p>
            </div>
            <div className="info-item">
              <h4>Working Hours</h4>
              <p>Monday to Saturday<br />10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </aside>

        <section className="form-card">
          <div className="section-heading">
            <h2>Send a Message</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter first name" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter last name" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Contact Number</label>
                <input type="tel" className="form-control" name="contact" value={formData.contact} onChange={handleChange} placeholder="10-digit mobile number" maxLength="10" required />
              </div>
              <div className="col-12">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} placeholder="Complete address" required />
              </div>
              <div className="col-12">
                <label className="form-label">Message</label>
                <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Write your message" required></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="primary-button w-100">Send Message</button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Contact
