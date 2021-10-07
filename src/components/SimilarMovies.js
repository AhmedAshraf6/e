import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchSimilarMovie } from '../apis/Api';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import MovieDetail from './MovieDetail';
import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, A11y]);
function SimilarMovies() {
  const { id } = useParams();
  const [similarMovies, setSimilarMovies] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setSimilarMovies(await fetchSimilarMovie(id));
    };
    fetchAPI();
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div className='netflix-slider pt-3'>
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
        {similarMovies.slice(0, 15).map((item) => {
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

export default SimilarMovies;
