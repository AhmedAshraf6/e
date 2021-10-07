import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { fetchMovieByGenre } from '../apis/Api';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, A11y]);
function Animation() {
  const [movieByGenreِِِِِAnimation, setMovieByGenreAnimation] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setMovieByGenreAnimation(await fetchMovieByGenre(16));
    };
    fetchAPI();
  }, []);
  return (
    <div className='netflix-slider pt-3'>
      <div
        className='
                  upper-swipper
                  d-flex
                  justify-content-between
                  align-items-center
                '
      >
        <p className='m-0'>أفلام اينيمشن </p>
        <a href='#'>
          المزيد
          <FaAngleDoubleLeft />
        </a>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        // slidesPerGroup={5}
        navigation
        scrollbar={{ draggable: true }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1000: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {movieByGenreِِِِِAnimation.slice(0, 10).map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Link to={`/moviedetail/${item.id}`}>
                <div className='unique'>
                  <img
                    className='img-fluid'
                    src={item.poster}
                    alt={item.title}
                  ></img>
                  <p style={{ fontWeight: 'bolder' }}>{item.title}</p>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Animation;
