import React from "react";
import Footer from "../Footer/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Services.css";

import Web from "../images/web-development.gif";
import Writing from "../images/content_writing.gif";
function Services() {
  return (
    <>
      <div className="Services container">
        
        <div className="row">
          <div className="col">
            <img src={Web} />
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
        <h1 className="card">My Work & Projects</h1>
        </div>
        </div>
      <div class="content-wrapper">
  
  <div class="news-card">
    <a href="https://statuesque-sprite-a817d9.netlify.app/" target="_blank"  class="news-card__card-link"></a>
    <img src="https://menshealthfoundation.ca/wp-content/uploads/2021/03/mens-health-services-featured.png" alt="" class="news-card__image" />
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">Health App</h2>
      <div class="news-card__post-date">2022</div>
      <div class="news-card__details-wrapper">
        <a href="https://statuesque-sprite-a817d9.netlify.app/" target="_blank" class="news-card__read-more">Visit Website <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div class="news-card">
    <a href="https://glowing-crumble-edb48c.netlify.app/" target="_blank"  class="news-card__card-link"></a>
    <img src="https://tushanttech.files.wordpress.com/2017/07/movies-releasing-this-year-banner.jpg" alt="" class="news-card__image" />
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">Movie Search App</h2>
      <div class="news-card__post-date">2022</div>
      <div class="news-card__details-wrapper">
        <a href="https://glowing-crumble-edb48c.netlify.app/" target="_blank" class="news-card__read-more">Visit Website <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div class="news-card">
    <a href="https://astounding-axolotl-7c152a.netlify.app/" target="_blank" class="news-card__card-link"></a>
    <img src="https://wallpaperaccess.com/full/1843880.jpg" alt="" class="news-card__image" />
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">Find Your Favourite Recipe</h2>
      <div class="news-card__post-date">2022</div>
      <div class="news-card__details-wrapper">
        
        <a href="https://astounding-axolotl-7c152a.netlify.app/" target="_blank" class="news-card__read-more">Visit Website <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div class="news-card">
    <a href="https://bejewelled-chimera-24bb56.netlify.app/" target="_blank" class="news-card__card-link"></a>
    <img src="https://images.indianexpress.com/2018/04/adventure_sport_759x422.jpg" alt="" class="news-card__image" />
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">Tourism Agency Website</h2>
      <div class="news-card__post-date">2022</div>
      <div class="news-card__details-wrapper">
       
        <a href="https://bejewelled-chimera-24bb56.netlify.app/" target="_blank" class="news-card__read-more">Visit Website <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  <div class="news-card">
    <a href="https://fullecommerceproject.netlify.app/" target="_blank" class="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/5710153/pexels-photo-5710153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/5710153/pexels-photo-5710153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="news-card__image" />
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">Ecommerce Website</h2>
      <div class="news-card__post-date">2022</div>
      <div class="news-card__details-wrapper">
        <a href="https://fullecommerceproject.netlify.app/" target="_blank" class="news-card__read-more">Visit Website <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>

  {/* <div class="news-card">
    <a href="#" class="news-card__card-link"></a>
    <img src="https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" class="news-card__image" />
    <div class="news-card__text-wrapper">
      <h2 class="news-card__title">Amazing 6<sup>th</sup> Title</h2>
      <div class="news-card__post-date">Jan 29, 2018</div>
      <div class="news-card__details-wrapper">
        <p class="news-card__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia.</p>
        <a href="#" class="news-card__read-more">Visit Website <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div> */}

</div>
      </div>
     
    </>
  );
}

export default Services;
