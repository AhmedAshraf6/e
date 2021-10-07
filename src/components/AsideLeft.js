import React, { useState, useEffect } from 'react';
import { fetchGenre } from '../apis/Api';
import { Link } from 'react-router-dom';

function AsideLeft() {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setGenres(await fetchGenre());
    };
    fetchAPI();
  }, []);
  return (
    <>
      <div className='col-xxl-3 '>
        <div className='list d-none d-xxl-block'>
          <div className='not-card' style={{ position: 'static' }}>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item text-center'>
                <h5>تابع ايجي بيست</h5>
              </li>
              <li className='list-group-item'>
                <i className='fab fa-facebook-square fa-lg'></i>
                <a>EgyBestOriginal</a>
              </li>
              <li className='list-group-item'>
                <i className='fab fa-twitter-square fa-lg'></i>
                <a>EgyBestOriginal@</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='row d-none d-xxl-block'>
          <div></div>
          <div className='home-buttons' style={{ direction: 'ltr' }}>
            <div
              className='btns d-grid gap-auto '
              style={{ position: 'sticky' }}
            >
              {genres.map((item) => {
                return (
                  <Link key={item.id} to={`/sp/${item.id}/${item.name}`}>
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AsideLeft;
