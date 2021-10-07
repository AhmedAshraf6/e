import axios from 'axios';

const apiKey = '7af3715c0ad19ece34ee241cc45075b0';
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing`;
const topRatedUrl = `${url}/movie/top_rated`;
const popular = `${url}/movie/popular`;
const upComing = `${url}/movie/upcoming`;
const latestMovies = `${url}/movie/latest`;
const trendingMoviesNow = `${url}/trending/movie/day`;
const trendingMoviesDay2 = `${url}/trending/movie/day`;
const trendingMoviesWeek = `${url}/trending/movie/week`;
const movieUrl = `${url}/movie`;
const genreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;

export const fetchMovies = async () => {
  try {
    const { data } = await axios.get(nowPlayingUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1,
      },
    });

    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }));
    return modifiedData;
  } catch (error) {}
};
export const fetchGenre = async () => {
  try {
    const { data } = await axios.get(genreUrl, {
      params: {
        api_key: apiKey,
        language: 'ar-SA',
        page: 1,
      },
    });
    const modifiedData = data['genres'].map((g) => ({
      id: g['id'],
      name: g['name'],
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchMovieByGenre = async (genre_id) => {
  try {
    const { data } = await axios.get(moviesUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 3,
        with_genres: genre_id,
      },
    });
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }));

    return modifiedData;
  } catch (error) {}
};
export const fetchPersons = async () => {
  try {
    const { data } = await axios.get(personUrl, {
      params: {
        api_key: apiKey,
      },
    });
    const modifiedData = data['results'].map((p) => ({
      id: p['id'],
      popularity: p['popularity'],
      name: p['name'],
      profileImg: 'https://image.tmdb.org/t/p/w200' + p['profile_path'],
      known: p['known_for_department'],
    }));
    return modifiedData;
  } catch (error) {}
};
export const fetchTopratedMovie = async () => {
  try {
    const { data } = await axios.get(topRatedUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1,
      },
    });
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }));

    return modifiedData;
  } catch (error) {}
};
export const fetchMostPopular = async () => {
  try {
    const { data } = await axios.get(popular, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1,
      },
    });
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }));

    return modifiedData;
  } catch (error) {}
};
export const fetchUpcoming = async () => {
  try {
    const { data } = await axios.get(upComing, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1,
      },
    });
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }));

    return modifiedData;
  } catch (error) {}
};
export const fetchLatestMovies = async () => {
  try {
    const { data } = await axios.get(latestMovies, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1,
      },
    });
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }));

    return modifiedData;
  } catch (error) {}
};
/* Trending Movies  */
export const fetchTrendingMoviesNow = async () => {
  try {
    const { data } = await axios.get(trendingMoviesNow, {
      params: {
        api_key: apiKey,
      },
    });

    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }));
    return modifiedData;
  } catch (error) {}
};
export const trendingMoviesDaily2 = async () => {
  try {
    const { data } = await axios.get(trendingMoviesDay2, {
      params: {
        api_key: apiKey,
        page: 2,
      },
    });

    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }));
    return modifiedData;
  } catch (error) {}
};
export const fetchTrendingMoviesWeekly = async () => {
  try {
    const { data } = await axios.get(trendingMoviesWeek, {
      params: {
        api_key: apiKey,
        page: 2,
      },
    });

    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchMovieDetail = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}`, {
      params: {
        api_key: apiKey,
        language: 'ar-SA',
      },
    });
    // const posterUrl = 'https://image.tmdb.org/t/p/original/';
    // const modifiedData = data.map((m) => ({
    //   id: m['id'],
    //   popularity: m['popularith'],
    //   title: m['original_title'],
    //   poster: posterUrl + m['poster_path'],
    //   overview: m['overview'],
    //   rating: m['vote_average'],
    //   // genres: m['genres']['name'],
    // }));
    // return modifiedData;
    return data;
  } catch (error) {}
};

export const fetchMovieVideos = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/videos`, {
      params: {
        api_key: apiKey,
      },
    });
    return data['results'][0];
  } catch (error) {
    // // console.log(error.response);
    // return error.response;
  }
};
export const fetchCasts = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/credits`, {
      params: {
        api_key: apiKey,
      },
    });
    const modifiedData = data['cast'].map((c) => ({
      id: c['cast_id'],
      character: c['character'],
      name: c['name'],
      img: 'https://image.tmdb.org/t/p/w200' + c['profile_path'],
    }));

    return modifiedData;
  } catch (error) {}
};

export const fetchSimilarMovie = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/similar`, {
      params: {
        api_key: apiKey,
        language: 'en_US',
      },
    });
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }));

    return modifiedData;
  } catch (error) {}
};
/***************************************** */

/* Tv Api */
const topRatedTv = `${url}/tv/top_rated`;
const popularTv = `${url}/tv/popular`;
const latestTv = `${url}/tv/latest`;
const airingTodayTv = `${url}/tv/airing_today`;
const tvUrl = `${url}/tv`;

export const fetchTopratedTvs = async () => {
  try {
    const { data } = await axios.get(`${topRatedTv}?api_key=${apiKey}&page=2`);
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      title: m['name'],
      poster: posterUrl + m['poster_path'],
      rating: m['vote_average'],
    }));

    return modifiedData;
  } catch (error) {}
};
export const fetchPopularTvs = async () => {
  try {
    const { data } = await axios.get(`${popularTv}?api_key=${apiKey}&page=1`);
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      title: m['name'],
      poster: posterUrl + m['poster_path'],
      rating: m['vote_average'],
    }));

    return modifiedData;
  } catch (error) {}
};
export const fetchLatestTvs = async () => {
  try {
    const { data } = await axios.get(
      `${airingTodayTv}?api_key=${apiKey}&page=4`
    );
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      title: m['name'],
      poster: posterUrl + m['poster_path'],
      rating: m['vote_average'],
    }));

    return modifiedData;
  } catch (error) {}
};
export const fetchAiringTvs = async () => {
  try {
    const { data } = await axios.get(
      `${airingTodayTv}?api_key=${apiKey}&page=1`
    );
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      title: m['name'],
      poster: posterUrl + m['poster_path'],
      rating: m['vote_average'],
    }));

    return modifiedData;
  } catch (error) {}
};
export const fetchTvDetail = async (id) => {
  try {
    const { data } = await axios.get(`${tvUrl}/${id}`, {
      params: {
        api_key: apiKey,
        language: 'ar-SA',
      },
    });
    return data;
  } catch (error) {}
};
export const fetchTvVideos = async (id) => {
  try {
    const { data } = await axios.get(`${tvUrl}/${id}/videos`, {
      params: {
        api_key: apiKey,
      },
    });
    return data['results'][0];
  } catch (error) {}
};
export const fetchTvCasts = async (id) => {
  try {
    const { data } = await axios.get(`${tvUrl}/${id}/credits`, {
      params: {
        api_key: apiKey,
      },
    });
    const modifiedData = data['cast'].map((c) => ({
      id: c['cast_id'],
      character: c['character'],
      name: c['name'],
      img: 'https://image.tmdb.org/t/p/w200' + c['profile_path'],
    }));

    return modifiedData;
  } catch (error) {}
};
export const fetchTvSeasons = async (id, nseason) => {
  try {
    const { data } = await axios.get(
      `${tvUrl}/${id}/season/${nseason}?api_key=${apiKey}`
    );
    return data;
  } catch (error) {}
};
