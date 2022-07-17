import React from "react";

const Why = () => {
  return (
    <section class="about alert-success rounded">
      <div class="container">
        <h2 class="section-heading">WHY CHOOSE US?</h2>
        <div class="align-items-center row">
          <div class="text-center col-xl-6 col-md-4">
            <img
              src="/images/product.svg"
              alt="mobile"
              class="img-fluid"
              width="80%"
            />
          </div>
          <div class="col-xl-6 col-md-8">
            <h3>We Provide Best Smart Products In The World</h3>
            <p>
              Get creative on the go with the best Smart Products you can buy in
              2021.Which are the best smartphones in 2021? Choosing a new
              smartphone is no longer as simple as upgrading to the latest
              iPhone or Samsung. After all, with top-of-the-line handsets
              costing over £1,000, it pays to know your options, and which
              fantastic handset could save you some cash.
            </p>
            <div class="icons-container ">
              <div class="icons">
                <i class="fas fa-shipping-fast"></i>
                <span>free delivery</span>
              </div>
              <div class="icons">
                <i class="fas fa-dollar-sign"></i>
                <span>easy payments</span>
              </div>
              <div class="icons">
                <i class="fas fa-headset"></i>
                <span>24/7 service</span>
              </div>
              <button class="btn btn-dark">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
