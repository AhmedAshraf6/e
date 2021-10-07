import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AsideLeft from './AsideLeft';
import AsideRight from './AsideRight';
import { BiTrendingUp } from 'react-icons/bi';
import { AiOutlineClockCircle, AiFillHeart } from 'react-icons/ai';
import { GiSwordSlice } from 'react-icons/gi';
import { fetchMovieByGenre } from '../apis/Api';
function Sp() {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const { name } = useParams();
  useEffect(() => {
    const fetchAPI = async () => {
      setMovies(await fetchMovieByGenre(id));
    };
    fetchAPI();
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  const trendShow = movies.slice(0, 20).map((item) => {
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
                <p className='m-0'>
                  {' '}
                  مشاهدة جميع أفلام
                  <span className='particular-name'> ال{name} </span>
                </p>
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

export default Sp;
