import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AsideLeft from './AsideLeft';
import AsideRight from './AsideRight';
import { BiTrendingUp } from 'react-icons/bi';

import {
  fetchTrendingMoviesNow,
  trendingMoviesDaily2,
  fetchTrendingMoviesWeekly,
} from '../apis/Api';
function MostViewed() {
  const [trendingMoviesNow, setTrendingMoviesNow] = useState([]);
  const [trendingDays, setTrendingDays] = useState([]);
  const [trendingMoviesWeekly, setTrendingMoviesWeekly] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setTrendingMoviesNow(await fetchTrendingMoviesNow());
      setTrendingDays(await trendingMoviesDaily2());
      setTrendingMoviesWeekly(await fetchTrendingMoviesWeekly());
      setTrending(await fetchTrendingMoviesNow());
    };
    fetchAPI();
  }, []);

  const trendShow = trending.slice(0, 20).map((item) => {
    return (
      <Link to={`/moviedetail/${item.id}`} key={item.id} className='img-fluid'>
        <img src={item.poster} alt={item.title}></img>
        <p className='text-center pt-3'>{item.title}</p>
      </Link>
    );
  });

  return (
    <section className='home popular'>
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
                <p className='m-0'>الأفلام الأكثر مشاهدة</p>
                <a onClick={() => setTrending(trendingMoviesNow)}>
                  <BiTrendingUp className='icon' />
                  الان
                </a>
                <a onClick={() => setTrending(trendingDays)}>
                  <BiTrendingUp className='icon' />
                  اليوم
                </a>
                <a onClick={() => setTrending(trendingMoviesWeekly)}>
                  <BiTrendingUp className='icon' />
                  هذا الأسبوع
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

export default MostViewed;
