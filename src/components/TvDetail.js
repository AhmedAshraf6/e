import { React, useState, useEffect } from 'react';
import { fetchTvDetail, fetchTvVideos, fetchTvCasts } from '../apis/Api';
import { useParams, Link } from 'react-router-dom';
import AsideLeft from './AsideLeft';
import AsideRight from './AsideRight';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { AiFillStar, AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import ReactPlayer from 'react-player';
import SimilarMovies from './SimilarMovies';
import TvSeasons from './TvSeasons';
function TvDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [video, setVideo] = useState([]);
  const [casts, setCasts] = useState([]);
  let seasons = detail.seasons;
  let gn = detail.genres;
  let img = detail.backdrop_path;
  let con = detail.production_countries;
  let lang = detail.spoken_languages;
  let youtubeUrl = 'https://www.youtube.com/watch?v=';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await fetchTvDetail(id));
      setVideo(await fetchTvVideos(id));
      setCasts(await fetchTvCasts(id));
    };
    fetchAPI();
    // console.log(vd);
  }, [id]);
  let vid;
  if (!video) {
    vid = <ReactPlayer url={youtubeUrl} controls width='100%'></ReactPlayer>;
  } else {
    vid = (
      <ReactPlayer
        url={youtubeUrl + video.key}
        controls
        width='100%'
      ></ReactPlayer>
    );
  }
  let gnList;
  if (gn) {
    gnList = gn.map((g, i) => {
      return <span key={i}>{g.name}.</span>;
    });
  }

  let cont;
  if (con) {
    cont = con.map((c, i) => {
      return <span key={i}>{c.name}</span>;
    });
  }
  let language;
  if (lang) {
    language = lang.map((l, i) => {
      return <span key={i}>{l.english_name}</span>;
    });
  }
  let imgPoster;
  imgPoster = `https://image.tmdb.org/t/p/original/${img}`;
  const castList = casts.slice(0, 6).map((c, i) => {
    return (
      <div className='col-md-3 text-center' key={i}>
        <img
          className='img-fluid rounded-circle '
          src={c.img}
          alt={c.name}
          style={{ height: '200px' }}
        ></img>
        <p className='font-weight-bold text-center'>{c.name}</p>
        <p
          className='font-weight-light text-center'
          style={{ color: '#5a606b' }}
        >
          {c.character}
        </p>
      </div>
    );
  });
  return (
    <section className='home moviedetail '>
      <div className='row'>
        <AsideRight />
        <div className='col-xxl-7 col-lg-9  col-md-12  p-3'>
          <h2 className='my-3 text-center'>
            مرحبا بكم في موقع ايجي بيست الأصلي
          </h2>
          <div className='row pt-5'>
            <div className='col-lg-5'>
              <img
                className='img-fluid'
                src={img && imgPoster}
                alt={detail.title}
              ></img>
            </div>
            <div className='col-lg-7 mt-3'>
              <table
                className='table table-bordered'
                style={{ direction: 'rtl' }}
              >
                <thead>
                  <p
                    className='d-flex
                  justify-content-end
                  align-items-center'
                  >
                    <span>{detail.name}</span>
                  </p>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row'> البلد</th>
                    <td>{con ? cont : 'United States of America'}</td>
                  </tr>
                  <tr>
                    <th scope='row'> اللغة</th>
                    <td>{lang ? language : 'English'}</td>
                  </tr>
                  <tr>
                    <th scope='row'>عرض</th>
                    <td style={{ color: '#000' }}>{detail.first_air_date}</td>
                  </tr>
                  <tr>
                    <th scope='row'>النوع</th>
                    <td className='kind'>{gn && gnList}</td>
                  </tr>

                  <tr>
                    <th scope='row'>التقييم</th>
                    <td style={{ color: '#000' }}>
                      <span className='star'>
                        <AiFillStar />
                      </span>
                      <span style={{ fontWeight: '700' }}>
                        {detail.vote_average}
                      </span>
                      <span>من 10 </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Start viewers opinion */}
          <div className='card mt-3'>
            <div className='card-header py-3'>تقييم المشاهدين</div>
            <div className='card-body py-4'>
              <p className='card-text text-center'>
                <span>{detail.vote_count}</span>
                <span>من المشاهدين اعجبهم هذا الفيلم</span>
                <span className='interacts'>
                  <span className='interact'>
                    <AiOutlineLike />
                  </span>
                  <span className='interact'>
                    <AiOutlineDislike />
                  </span>
                </span>
              </p>
            </div>
          </div>
          {/* Start film overview*/}
          <div className='card overview mt-3'>
            <div className='card-header py-3'>القصة </div>
            <div className='card-body'>
              <h5 className='card-title'>{detail.title}</h5>
              <p className='card-text text-center'>
                <span>{detail.overview}</span>
              </p>
            </div>
          </div>
          {/* Start video trailer*/}

          <div className='card movie mt-3'>
            <div className='card-header py-3'>
              مشاهدة اعلان الفيلم (التريلر){' '}
            </div>
            <div className='card-body mx-auto my-3'>{vid}</div>
          </div>

          {/* Start  casts*/}
          <div className='card movie mt-3'>
            <div className='card-header py-3'>الأبطال</div>
            <div className='card-body mx-auto d-flex justify-content-center flex-wrap d-grid gap-3'>
              {castList}
            </div>
          </div>
          {/* Start viewers opinion */}
          <div className='card mt-3'>
            <div className='card-header py-3'>تقييم المشاهدين</div>
            <div className='card-body py-4'>
              <p className='card-text text-center'>
                <span>{detail.vote_count}</span>
                <span>من المشاهدين اعجبهم هذا الفيلم</span>
                <span className='interacts'>
                  <span className='interact'>
                    <AiOutlineLike />
                  </span>
                  <span className='interact'>
                    <AiOutlineDislike />
                  </span>
                </span>
              </p>
            </div>
          </div>
          {/* Start similar movies */}
          <div className='card movies similar mt-3'>
            <div className='card-header py-3'>مشاهدة جميع المواسم</div>
            <div className='card-body'>
              <TvSeasons />
            </div>
          </div>
          {/* Comments */}
          <div className='card movies similar mt-3'>
            <div className='card-header py-3 '>التعليقات</div>
            <div className='card-body text-center'>التعليقات مغلقة مؤقتا</div>
          </div>
        </div>
        <AsideLeft />
      </div>
    </section>
  );
}

export default TvDetail;
