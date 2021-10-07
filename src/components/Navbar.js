import { useState, React, useRef, useEffect } from 'react';
import { FaBars, FaUser } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { IoHome } from 'react-icons/io5';
import { BiTrendingUp } from 'react-icons/bi';
import { FiFilm } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { AiOutlineDesktop } from 'react-icons/ai';

function Navbar() {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleBars, setToggleBars] = useState(false);
  const [inValue, setInValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [listMovies, setListMovies] = useState(false);
  const posterUrl = 'https://image.tmdb.org/t/p/original/';

  const handlerSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=7af3715c0ad19ece34ee241cc45075b0&query=${inValue}`
      );
      const modifiedData = data['results'].slice(0, 5).map((m) => ({
        id: m['id'],
        backPoster: posterUrl + m['backdrop_path'],
        // popularity: m['popularith'],
        title: m['title'],
        // poster: posterUrl + m['poster_path'],
      }));

      setMovies(modifiedData);
      setListMovies(true);
    } catch (error) {}
  };

  const res = movies.map((item) => {
    return (
      <div className='m-3' key={item.id}>
        <Link
          to={`/moviedetail/${item.id}`}
          onClick={() => {
            setListMovies(false);
            setToggleSearch(false);
          }}
        >
          <img
            src={item.backPoster}
            className='img-fluid rounded-start'
            alt={item.title}
            style={{ width: '50px', height: '60px', marginRight: '10px' }}
          />
          <span>{item.title}</span>
        </Link>
      </div>
    );
  });
  return (
    <>
      <nav className='nav p-2 fixed-top'>
        <div className='container'>
          <div className='row main'>
            <div className='col-md-2 col-6'>
              <a className='logo d-flex align-items-center'>
                {/* <i className='fas fa-bars d-md-none'></i> */}
                <span
                  className='d-lg-none logo-icon'
                  onClick={() => {
                    setToggleBars(!toggleBars);
                    setToggleSearch(false);
                  }}
                >
                  <FaBars />
                </span>
                <Link to='/'>
                  <span className='red'>Egy</span>
                  <span className='blue'>Best</span>
                </Link>
              </a>
            </div>

            <div className='col-md-6 d-none d-md-block'>
              <div className='input-group input-group-lg'>
                <input
                  type='text'
                  className='form-control'
                  aria-label='Sizing example input'
                  aria-describedby='inputGroup-sizing-default'
                  placeholder='ابحث عن فيلم الان  ...'
                  onKeyUp={handlerSearch}
                  value={inValue}
                  onChange={(e) => setInValue(e.target.value)}
                />
                {/* <i className='fas fa-search fa-lg'></i> */}
                <div className='i'>
                  <BsSearch />
                </div>
              </div>
              {listMovies && (
                <div
                  className='results'
                  style={{
                    background: '#fff',
                    position: 'fixed',
                    width: '48% ',
                    direction: 'ltr',
                  }}
                >
                  {res}
                </div>
              )}
            </div>

            <div className='col-md-4 col-6'>
              <div className='buttons'>
                <button className='btn btn-success btn-lg d-none d-sm-inline-block mx-3'>
                  <FaUser />
                  اشترك مجانا
                </button>
                <button className='btn btn-primary btn-lg d-none d-lg-inline-block'>
                  تسجيل الدخول
                </button>
                {/* <i className='fas fa-search main-search fa-2x '></i> */}
                <div
                  className='main-search d-md-none'
                  onClick={() => {
                    setToggleSearch(!toggleSearch);
                    setToggleBars(false);
                  }}
                >
                  <BsSearch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Toggle Search Icon */}
      <section
        className={
          toggleSearch
            ? 'toggle-search-icon d-md-none active'
            : 'toggle-search-icon '
        }
      >
        <div className='input-group input-group-lg'>
          <input
            type='text'
            className='form-control'
            aria-label='Sizing example input'
            aria-describedby='inputGroup-sizing-default'
            placeholder='ابحث عن فيلم او ممثل ...'
            onKeyUp={handlerSearch}
            value={inValue}
            onChange={(e) => setInValue(e.target.value)}
          />
          {/* <div className='i'>
            <BsSearch />
          </div> */}
        </div>
        {listMovies && (
          <div
            className='results'
            style={{
              background: '#fff',
              position: 'fixed',
              width: '100% ',
              direction: 'ltr',
            }}
          >
            {res}
          </div>
        )}
      </section>
      {/* Toggle Bars Icon */}
      <section
        className={
          toggleBars ? 'toggle-bars-icon d-md-none active' : 'toggle-bars-icon'
        }
      >
        <div className='not-card'>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <Link to='/'>
                <IoHome className='icon' />
                <span onClick={() => setToggleBars(false)}>ايجي بيست</span>
              </Link>
            </li>
            <li className='list-group-item'>
              <Link to='/mostviewed'>
                <BiTrendingUp className='icon' />
                <span onClick={() => setToggleBars(false)}> الأكثر مشاهدة</span>
              </Link>
            </li>
            <li className='list-group-item'>
              <Link to='/movies'>
                <FiFilm className='icon' />
                <span onClick={() => setToggleBars(false)}> أفلام </span>
              </Link>
            </li>
            <li className='list-group-item'>
              <Link to='/tvs'>
                <FiFilm className='icon' />
                <span onClick={() => setToggleBars(false)}> مسلسلات </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Navbar;
