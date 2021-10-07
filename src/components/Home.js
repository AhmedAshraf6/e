import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  fetchMovieByGenre,
  fetchTopratedMovie,
  fetchMostPopular,
} from '../apis/Api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import Poplaur from './Poplaur';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper';
import AsideLeft from './AsideLeft';
import AsideRight from './AsideRight';
import TopRated from './TopRated';
import Crime from './Crime';
import Comedy from './Comedy';
import War from './war';
import Animation from './Animation';
import History from './History';

SwiperCore.use([Navigation, A11y]);
function Home() {
  return (
    <section className='home'>
      <div className='row'>
        <AsideRight />
        <div className='col-xxl-7 col-lg-9 col-md-12 '>
          <article className='movies '>
            <h2 className='my-3 text-center'>
              مرحبا بكم في موقع ايجي بيست الأصلي
            </h2>
            <Poplaur />
            {/* Top Rated */}
            <TopRated />
            {/* Crime Movie */}
            <Crime />
            {/* Comedy Movies */}
            <Comedy />
            {/* War Movies */}
            <War />
            {/* Animation Movies */}
            <Animation />
            {/* History Movies */}
            <History />
          </article>
        </div>
        <AsideLeft />
      </div>
    </section>
  );
}

export default Home;
