import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AsideLeft from './AsideLeft';
import AsideRight from './AsideRight';
import { BiTrendingUp } from 'react-icons/bi';
import { AiOutlineClockCircle, AiFillHeart } from 'react-icons/ai';
import { GiSwordSlice } from 'react-icons/gi';

import {
  fetchTopratedTvs,
  fetchPopularTvs,
  fetchLatestTvs,
  fetchAiringTvs,
} from '../apis/Api';
function Tvs() {
  const [topRatedTvs, setTopRatedTvs] = useState([]);
  const [popularTvs, setpopularTvs] = useState([]);
  const [latestTvs, setLatestTvs] = useState([]);
  const [AiringTvs, setAiringTvs] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setTopRatedTvs(await fetchTopratedTvs());
      setpopularTvs(await fetchPopularTvs());
      setLatestTvs(await fetchLatestTvs());
      setAiringTvs(await fetchAiringTvs());
      setTrending(await fetchAiringTvs());
    };
    fetchAPI();
  }, []);

  const trendShow = trending.map((item) => {
    return (
      <Link to={`/tvdetail/${item.id}`} key={item.id} className='img-fluid'>
        <img src={item.poster} alt={item.name}></img>
        <p className='text-center pt-3'>{item.title}</p>
      </Link>
    );
  });

  return (
    <section className='home popular tvs'>
      <div className='row'>
        <AsideRight />
        <div className='col-xxl-7 col-lg-9  col-md-12 '>
          <article className='movies'>
            <h2 className='my-3 text-center'>
              مرحبا بكم في موقع ايجي بيست الأصلي
            </h2>
            <div className='netflix-slider py-3'>
              <div
                className='
                  upper-swipper
                  d-flex
                  justify-content-center
                  align-items-center
                '
              >
                <p className='m-0'>مسلسلات الأكثر مشاهدة</p>
                <a onClick={() => setTrending(AiringTvs)}>
                  <GiSwordSlice className='icon' />
                  مسلسلات جديدة
                </a>
                <a onClick={() => setTrending(latestTvs)}>
                  <AiOutlineClockCircle className='icon' />
                  أحدث الاضافات
                </a>
                <a onClick={() => setTrending(topRatedTvs)}>
                  <AiFillHeart className='icon' />
                  أفضل المسلسلات
                </a>
                <a onClick={() => setTrending(popularTvs)}>
                  <BiTrendingUp className='icon' />
                  الأكثر شهرة
                </a>
              </div>

              <div className='all-movies p-3 mt-3'>
                <div className='row'>
                  <div className='col d-flex justify-content-center flex-wrap d-grid gap-3'>
                    {trendShow}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <AsideLeft />
      </div>
    </section>
  );
}

export default Tvs;
