import React from 'react'

const Home = () => {
  return (
    <div>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img width={350} height={450} src="https://s3bg.cashify.in/gpro/uploads/2022/08/16211949/Upcoming-Sale-on-Flipkart-1024x512.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img width={350} height={450} src="https://images.livemint.com/img/2022/09/13/1600x900/flipkart_big_billion_days_1663049374767_1663049395888_1663049395888.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img width={350} height={450} src="https://www.paisawapas.com/shoptalk/wp-content/uploads/2025/12/PaisaWapas-x-Flipkart.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
   </div>
   
<div className='row mt-4 mb-4'>
     <div className='col-3 mb-3'>
                <div class="card" style={{width:'100%'}}> 
                <img width={200} height={200} src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/t/g/x/1-chrono-dual-armygreen-resin-digital-mudresist-1327-m7-by-original-imahk9evhcgjctfz.jpeg?q=70" class="card-img-top"
                alt="..."/>

                </div>
     </div>
  
    <div className='col-3 mb-3'>
                <div class="card" style={{width:'100%'}}>
                <img width={200} height={200} src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/k/b/o/6-sneaker-6-echor-white-green-resized-2-original-imahf9phg7hdhrhf.jpeg?q=70" class="card-img-top" 
                alt="..."/>
                
                </div>
    </div>

    <div className='col-3 mb-3'>
                <div class="card" style={{width:'100%'}}>
                <img width={200} height={200} src="https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/b/p/m/m-irs1107c1sg-irus-original-imahfujrjmxsxuxs.jpeg?q=70" class="card-img-top"
                 alt="..."/>
                
                </div>
    </div>

 <div className='col-3 mb-3'>
                <div class="card" style={{width:'100%'}}>
                <img width={200} height={200} src="https://rukminim2.flixcart.com/image/1536/1536/xif0q/helmet/a/k/1/-original-imagrzvhehgbu7tg.jpeg?q=90" class="card-img-top"
                alt="..."/>
                </div>
                </div>

</div>
{/* Replace your old footer with this */}
<div className="footer">

  <div className="footer-top">
    <div className="footer-col">
      <h4>About</h4>
      <ul>
        <li>About Us</li>
        <li>Careers</li>
        <li>Press</li>
        <li>Corporate Info</li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Help</h4>
      <ul>
        <li>Payments</li>
        <li>Shipping</li>
        <li>Cancellation</li>
        <li>FAQ</li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Policy</h4>
      <ul>
        <li>Return Policy</li>
        <li>Terms of Use</li>
        <li>Security</li>
        <li>Privacy</li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Social</h4>
      <ul>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>YouTube</li>
        <li>Instagram</li>
      </ul>
    </div>
  </div>

  <div className="footer-middle">
    <span className="footer-badge">&#128272; Secure Payments</span>
    <span className="footer-badge">&#x1F69A; Fast Delivery</span>
    <span className="footer-badge">&#128338; Easy Returns</span>
    <span className="footer-badge">&#128076; Top Rated</span>
  </div>

  <div className="footer-bottom">
    <p>© 2024 Flipkart Clone. Built with React.js</p>
    <p>Made with ❤️ in India</p>
  </div>

</div>
</div>


  
  )
}

export default Home