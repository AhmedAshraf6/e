import { React } from 'react';
import { Link } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import { BiTrendingUp } from 'react-icons/bi';
import { FiFilm } from 'react-icons/fi';

function AsideRight() {
  // const [clicked, setClicked] = React.useState(false);

  return (
    <>
      <div className='col-xxl-2 col-lg-3'>
        <div className='list d-none d-lg-block'>
          <div className='not-card'>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <Link to='/' className='link'>
                  <IoHome className='icon ' />
                  <span>ايجي بيست</span>
                </Link>
              </li>
              <li className='list-group-item'>
                <Link to='/mostviewed' className='link '>
                  <BiTrendingUp className='icon' />
                  <span> الأكثر مشاهدة</span>
                </Link>
              </li>
              <li className='list-group-item'>
                <Link to='/movies' className='link'>
                  <FiFilm className='icon' />
                  <span> أفلام </span>
                </Link>
              </li>
              <li className='list-group-item'>
                <Link to='/tvs' className='link'>
                  <FiFilm className='icon' />
                  <span> مسلسلات </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AsideRight;
