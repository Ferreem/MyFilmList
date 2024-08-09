import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/genre/movie/list',
  params: {language: 'en'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWU4YzY5YjdhOTNkYmU5MTZjYTg2MzhmZDFlY2ZiMiIsIm5iZiI6MTcyMzIyMTQ4NS4wMDM3NTQsInN1YiI6IjY2YjYxYzI2N2VlOWYzYjMwZjA3MTRjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mlqlUhoIgoZKxfLiDBRcPWHS6gCuLiceFZwHwz-hoYc'
  }
};
const movieList = () => {

 axios
    .request(options)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });
}

movieList();