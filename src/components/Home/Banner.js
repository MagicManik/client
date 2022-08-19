import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import banner1 from "../../assets/banner/banner (10).jpg";
import banner2 from "../../assets/banner/banner (13).jpg";
import banner3 from "../../assets/banner/banner (14).jpg";
import banner4 from "../../assets/banner/banner (15).jpg";
import useChannels from "../../hooks/useChannels";

import "./Banner.css";

const Banner = () => {

  const [channels] = useChannels();
  // const getTheme = localStorage.getItem("colorTheme");


  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 4.2,
          slidesToScroll: 4
        }
      }
    ]
  };

  return (

    <section className="relative md-static">
      <div className="carousel w-full  z-10 banner-container">

        <div id="slide1" className="carousel-item  w-full">
          <img src={banner1} className="banner-img" alt="banner1" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle bg-transparent">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-transparent">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="banner-img" alt="banner-2" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle bg-transparent">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-transparent">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="banner-img" alt="banner-3" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-transparent">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-transparent">
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="banner-img" alt="banner-4" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle bg-transparent">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-transparent">
              ❯
            </a>
          </div>
        </div>

      </div>


      {/* Tv Channels for large device */}
      <div className="absolute hidden md:block bottom-0 w-full left-0 video-section">
        <h1 className="lg:px-16 text-2xl text-secondary">TV CHANNELS</h1>
        <div className=" lg:px-16 bg-primary sm:px-4 video-container">
          <div className=' popular-movie-section'>
            <Slider {...settings} className=''>
              {
                channels.map(tv =>

                  <div key={tv._id}>
                    <div className={'zoom-div-I pb-2 pl-2 pt-6 pr-4 video-div'} key={tv._id}>
                      <Link to={`/channel/${tv._id}`}>
                        <img className='popular-movie-img rounded-lg' src={tv.imgLink} alt="" />
                      </Link>
                    </div>
                  </div>)
              }
            </Slider>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Banner;
