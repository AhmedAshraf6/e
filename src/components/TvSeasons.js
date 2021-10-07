import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchTvDetail } from '../apis/Api';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, A11y]);
function TvSeasons() {
  const { id } = useParams();
  const [detailSeason, setDetailSeason] = useState([]);

  // let seasonList;
  // if (seasons) {
  //   seasonList =
  //   });
  // }
  useEffect(() => {
    const fetchAPI = async () => {
      setDetailSeason(await fetchTvDetail(id));
      // console.log(fetchTvDetail(id));
    };
    fetchAPI();
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  let seasons = detailSeason.seasons;
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
        {seasons
          ? seasons.map((s) => {
              return (
                <SwiperSlide key={s.id}>
                  <Link to={`/tvseason/${s.id}/season/${s.season_number}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${s.poster_path}`}
                    />
                    <p style={{ fontWeight: 'bolder' }}>{s.name}</p>
                  </Link>
                </SwiperSlide>
              );
            })
          : 'undefined'}
      </Swiper>
    </div>
  );
}

export default TvSeasons;
