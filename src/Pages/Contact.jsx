import React from 'react'

const Contact = () => {
  return (
        
     <div className='img'> 
      <h1 style={{ textAlign: 'center' }}>CONTACT PAGE</h1>
        <div class="col-md-7 col-lg-8">
        <form class="needs-validation" novalidate=""/>
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" fdprocessedid="96wjxo" />
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" fdprocessedid="lfc9h" />
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email <span class="text-muted"></span></label>
              <input type="email" class="form-control" id="email" placeholder="email@gmail.com" fdprocessedid="6rk0r" />
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="contact" class="form-label">Contact</label>
              <input type="text" class="form-control" id="contact" placeholder="123..." fdprocessedid="6rk0r" />
              <div class="invalid-feedback">
                Please enter your correct contact number.
              </div>
            </div>

            <div class="col-12">
              <label for="address2" class="form-label">Address  <span class="text-muted"></span></label>
              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" fdprocessedid="nt14vl" />
            </div>

            <div class="col-md-5">
              <label for="country" class="form-label">Country</label>
              <select class="form-select" id="country" required="" fdprocessedid="z2vwbs">
                <option value="">Choose...</option>
                <option value="india">India</option>
              </select>

              <div class="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div class="col-md-4">
              <label for="state" class="form-label">State</label>
              <select class="form-select" id="state" required="" fdprocessedid="1x8crf">
                <option value="">Choose...</option>
                 <option value="india">India</option>
              </select>

              <div class="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

          </div>

          <hr class="my-4"/>

<div class="form-check">
            <input type="checkbox" class="form-check-input" id="save-info" />
            <label class="form-check-label" for="save-info">Save this information for next time</label>
          </div>

          <hr class="my-6"/>
    
     </div>
  </div>
    
  )
}

export default Contact