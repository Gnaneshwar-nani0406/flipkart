import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Fast Delivery',
      label: 'Delivery',
      description: 'Clear delivery timelines with safe packaging for every order.'
    },
    {
      id: 2,
      title: 'Secure Payment',
      label: 'Payment',
      description: 'Pay with cards, UPI, wallets, net banking, or cash on delivery.'
    },
    {
      id: 3,
      title: 'Customer Support',
      label: 'Support',
      description: 'Help for order tracking, refunds, returns, and account questions.'
    },
    {
      id: 4,
      title: 'Easy Returns',
      label: 'Returns',
      description: 'Simple return support for eligible products within the return window.'
    },
    {
      id: 5,
      title: 'Quality Checks',
      label: 'Quality',
      description: 'Products are listed with clear images, prices, and category details.'
    },
    {
      id: 6,
      title: 'Better Prices',
      label: 'Savings',
      description: 'Straightforward discounts shown directly on the product card.'
    }
  ];

  return (
    <div className="services-container">
      <header className="page-header">
        <div className="page-container">
          <h1>Services</h1>
          <p>Useful shopping support without extra noise.</p>
        </div>
      </header>

      <main className="page-container">
        <section className="section-block">
          <div className="section-heading">
            <div>
              <h2>Why Shop With Us</h2>
              <p>Basic services customers expect from a reliable online store.</p>
            </div>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article key={service.id} className="service-card">
                <span className="service-label">{service.label}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <div>
              <h2>Ready to shop?</h2>
              <p>Open the product catalog and add items to your cart.</p>
            </div>
            <Link className="primary-link" to="/products">View Products</Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Services
