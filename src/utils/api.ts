import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
//////////////////////////////////////////////////////////
export interface Genre {
  id: number;
  name: string;
}

interface GenreRes {
  genres: Genre[];
}
/////////////////////////////////////////////////////////

export interface TopRated {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Genre[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  realease_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface TopRatedRes{
  results: TopRated[];
}
///////////////////////////////////////////////////////////
const baseConfig: AxiosRequestConfig = {
  method: 'GET',
  params: { language: 'en' },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
  }
};

const createConfig = (url: string): AxiosRequestConfig => ({
  ...baseConfig,
  url,
})

export const fetchMovieGenres = async (): Promise<GenreRes> => {
  const config = createConfig('https://api.themoviedb.org/3/genre/movie/list');
  const response: AxiosResponse<GenreRes> = await axios.request<GenreRes>(config);
  return response.data;
}
/////
export const fetchMovieTopRated = async () : Promise<TopRatedRes> => {
  const config = createConfig('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1');
  const response: AxiosResponse<TopRatedRes> = await axios.request<TopRatedRes>(config);
  return response.data;
}