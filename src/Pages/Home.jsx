import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeBanner, setActiveBanner] = useState(0);

  const banners = [
    {
      title: 'Big Saving Days',
      subtitle: 'Mobiles, fashion, electronics and more at great prices',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/2/s/8-sport-24503-8-nobelite-white-black-resized-2-original-imahf3x7e8yanbyy.jpeg?q=70',
      theme: 'blue'
    },
    {
      title: 'Top Deals On Fashion',
      subtitle: 'Refresh your daily style with fresh offers',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/4/n/2/m-demon-slayer-rengoku-oversized-t-shirt-annnackel-original-imahjv7tpruwjd8m.jpeg?q=70',
      theme: 'violet'
    },
    {
      title: 'Electronics Bestsellers',
      subtitle: 'Headphones, smart watches and accessories for everyone',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/k/5/v/1-spm01-wristy-men-original-imahh4qadv7xgh6j.jpeg?q=70',
      theme: 'green'
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/flipkart',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 8.5h2V5.2c-.3 0-1.5-.2-2.9-.2-2.9 0-4.9 1.8-4.9 5.1V13H5v3.7h3.2V24h3.9v-7.3h3.1l.5-3.7h-3.6v-2.5c0-1.1.3-2 1.9-2Z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/flipkart',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 2.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Z" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Flipkart',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.9 2h3.4l-7.5 8.6L23.6 22h-6.9l-5.4-7-6.2 7H1.7l8-9.2L1.2 2h7.1l4.9 6.5L18.9 2Zm-1.2 18h1.9L7.3 3.9h-2L17.7 20Z" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/user/flipkart',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
        </svg>
      )
    }
  ];

  const products = [
    {
      id: 1,
      name: 'Sports Running Shoes',
      price: 599,
      originalPrice: 1199,
      discount: '50% off',
      rating: 4.5,
      reviews: 1220,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/2/s/8-sport-24503-8-nobelite-white-black-resized-2-original-imahf3x7e8yanbyy.jpeg?q=70',
      category: 'Shoes'
    },
    {
      id: 5,
      name: 'Analog Wrist Watch',
      price: 399,
      originalPrice: 799,
      discount: '50% off',
      rating: 4.4,
      reviews: 840,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/k/5/v/1-spm01-wristy-men-original-imahh4qadv7xgh6j.jpeg?q=70',
      category: 'Watch'
    },
    {
      id: 9,
      name: 'Printed Cotton T-Shirt',
      price: 459,
      originalPrice: 999,
      discount: '54% off',
      rating: 4.3,
      reviews: 2340,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/4/n/2/m-demon-slayer-rengoku-oversized-t-shirt-annnackel-original-imahjv7tpruwjd8m.jpeg?q=70',
      category: 'T-Shirt'
    },
    {
      id: 17,
      name: 'Full Face Safety Helmet',
      price: 899,
      originalPrice: 1799,
      discount: '50% off',
      rating: 4.5,
      reviews: 890,
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/helmet/v/a/r/fighter-hanuman-ji-hd-graphics-with-anti-uv-pc-visor-abs-original-imahf3zq38npu4bx.jpeg?q=70',
      category: 'Helmet'
    }
  ];

  const categories = [
    { name: 'SHOES', label: 'Shoes', caption: 'Daily wear and sports' },
    { name: 'WATCH', label: 'Watches', caption: 'Analog and casual' },
    { name: 'T-SHIRT', label: 'T-Shirts', caption: 'Comfortable cotton wear' },
    { name: 'WALLET', label: 'Wallets', caption: 'Simple everyday styles' },
    { name: 'HELMET', label: 'Helmets', caption: 'Riding essentials' }
  ];

  const handleCategoryClick = (categoryName) => {
    navigate('/products', { state: { selectedCategory: categoryName } });
  };

  const handleAddToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, category: product.category.toUpperCase() }
    });
    alert(`${product.name} added to cart`);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBanner((current) => (current + 1) % banners.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [banners.length]);

  const showPreviousBanner = () => {
    setActiveBanner((current) => (current === 0 ? banners.length - 1 : current - 1));
  };

  const showNextBanner = () => {
    setActiveBanner((current) => (current + 1) % banners.length);
  };

  return (
    <div className="home-container">
      <section className="home-hero">
        <div className="page-container">
          <div className="flipkart-slideshow" aria-label="Featured offers">
            {banners.map((banner, index) => (
              <Link
                key={banner.title}
                className={`slide-banner slide-${banner.theme} ${index === activeBanner ? 'active' : ''}`}
                to="/products"
                aria-hidden={index !== activeBanner}
                tabIndex={index === activeBanner ? 0 : -1}
              >
                <span className="slide-copy">
                  <strong>{banner.title}</strong>
                  <span>{banner.subtitle}</span>
                </span>
                <span className="slide-art">
                  <img src={banner.image} alt="" />
                </span>
              </Link>
            ))}

            <button className="slide-control slide-prev" type="button" onClick={showPreviousBanner} aria-label="Previous banner">
              &lsaquo;
            </button>
            <button className="slide-control slide-next" type="button" onClick={showNextBanner} aria-label="Next banner">
              &rsaquo;
            </button>

            <div className="slide-dots" aria-label="Choose banner">
              {banners.map((banner, index) => (
                <button
                  key={banner.title}
                  className={index === activeBanner ? 'active' : ''}
                  type="button"
                  onClick={() => setActiveBanner(index)}
                  aria-label={`Show ${banner.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="page-container">
        <section className="section-block">
          <div className="section-heading">
            <div>
              <h2>Shop by Category</h2>
              <p>Quickly open the product type you are looking for.</p>
            </div>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <button key={category.name} className="category-card" onClick={() => handleCategoryClick(category.name)}>
                <strong>{category.label}</strong>
                <span>{category.caption}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <div>
              <h2>Featured Products</h2>
              <p>Simple picks from popular categories.</p>
            </div>
            <Link className="inline-link" to="/products">See all</Link>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <span className="product-badge">{product.discount}</span>
                </div>
                <div className="product-info">
                  <p className="product-category">{product.category}</p>
                  <h3 className="product-title">{product.name}</h3>
                  <div className="price-line">
                    <span className="price">Rs. {product.price}</span>
                    <span className="original-price">Rs. {product.originalPrice}</span>
                  </div>
                  <div className="rating-line">
                    <span className="rating-chip">{product.rating}</span>
                    {product.reviews.toLocaleString()} reviews
                  </div>
                  <button className="add-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="page-container">
          <div className="footer-grid">
            <div>
              <h4>About</h4>
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h4>Help</h4>
              <ul>
                <li>Payments</li>
                <li>Shipping</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4>Policy</h4>
              <ul>
                <li>Return Policy</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div>
              <h4>Connect</h4>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noreferrer" aria-label={social.name} title={social.name}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-bottom">2026 Flipkart Clone. Built with React.</div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
