import React from "react";
import Swiper from 'swiper';
import $ from 'jquery';
import './horizonal.css';

function SliderCard()
{
    $(function(){
  
        var mySwiper = new Swiper ('.swiper-container', {
          // autoplay: true,
          spaceBetween: 30,
          slidesPerView: 'auto',
          // loop: true,
          // If we need pagination
          pagination: '.swiper-pagination',
          
          // Navigation arrows
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
        });
        
      });
    return(
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="card">
                                    <img src="https://placehold.it/300x200" alt="" class="card-img-top" />
                                    <div class="card-block">
                                    <h4 class="card-title">Person 1</h4>
                                    <p class="card-text">Person 1 is a member of this team. Find out more by checking his/her profile</p>
                                    <a href="#" class="btn btn-primary">Profile</a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="card">
                                    <img src="https://placehold.it/300x200" alt="" class="card-img-top" />
                                    <div class="card-block">
                                    <h4 class="card-title">Person 2</h4>
                                    <p class="card-text">Person 1 is a member of this team. Find out more by checking his/her profile</p>
                                    <a href="#" class="btn btn-primary">Profile</a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="card">
                                    <img src="https://placehold.it/300x200" alt="" class="card-img-top" />
                                    <div class="card-block">
                                    <h4 class="card-title">Person 3</h4>
                                    <p class="card-text">Person 1 is a member of this team. Find out more by checking his/her profile</p>
                                    <a href="#" class="btn btn-primary">Profile</a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="card">
                                    <img src="https://placehold.it/300x200" alt="" class="card-img-top" />
                                    <div class="card-block">
                                    <h4 class="card-title">Person 3</h4>
                                    <p class="card-text">Person 1 is a member of this team. Find out more by checking his/her profile</p>
                                    <a href="#" class="btn btn-primary">Profile</a>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderCard;