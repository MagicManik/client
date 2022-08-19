import React from 'react';
import movie1 from '../../../assets/free-videos/free-video (1).jpg';
import movie2 from '../../../assets/free-videos/free-video (2).jpg';
import movie3 from '../../../assets/free-videos/free-video (3).jpg';
import movie4 from '../../../assets/free-videos/free-video (4).jpg';
import movie5 from '../../../assets/free-videos/free-video (5).jpg';
import movie6 from '../../../assets/free-videos/free-video (6).jpg';
import movie7 from '../../../assets/free-videos/free-video (7).jpg';
import freeVideo from '../../../assets/others/free-video.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import './PioneerflixFree.css';
import { useTranslation } from "react-i18next";
import i18next from "i18next"; 

const PioneerflixFree = () => {

    const { t } =useTranslation(["home"])

    const popularMovies = [
        {
            _id: 1,
            name: 'Movie 1',
            description: '',
            img: movie1
        },
        {
            _id: 2,
            name: 'Movie 2',
            description: '',
            img: movie2
        },
        {
            _id: 3,
            name: 'Movie 3',
            description: '',
            img: movie3
        },
        {
            _id: 4,
            name: 'Movie 4',
            description: '',
            img: movie4
        },
        {
            _id: 5,
            name: 'Movie 5',
            description: '',
            img: movie5
        },
        {
            _id: 6,
            name: 'Movie 6',
            description: '',
            img: movie6
        },
        {
            _id: 7,
            name: 'Movie 7',
            description: '',
            img: movie7
        }
    ];

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
                    slidesToShow: 2.2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <section className='text-secondary'>
            <div className='pb-3 custom-bg'>
                <div className='bg-primary pl-5  video-container-II'>
                    <h1 className='text-2xl pt-6'>{t("POPULARWEBSERIES")}</h1>
                    <div className='pb-10'>
                        <Slider {...settings}>

                            {
                                popularMovies.map(movie =>

                                    <div className='zoom-div-I pb-2 pl-2 pt-6 pr-4 video-div' key={movie._id}>
                                        <Link to='/ok'>
                                            <img className='popular-movie' src={movie.img} alt="" />
                                        </Link>

                                    </div>)
                            }

                        </Slider>
                    </div>

                    <div className='bg-primary grid lg:grid-cols-2 gap-4 items-center sm:grid-cols-1'>

                        <div className='text-container-left-2 pb-10'>
                            <h1 className='text-5xl font-bold '>{t("Have fun to watch with your web series")}</h1>
                            <br />
                            <p className='text-2xl'>{t("Simply save Your favorite show on your watch list and entertaining to watch")}</p>
                        </div>

                        <div className='pb-10'>
                            <img className='w-10/12 pt-10 rounded-2xl' src={freeVideo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PioneerflixFree;