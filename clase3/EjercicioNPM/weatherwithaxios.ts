import Axios from 'axios';

Axios({
    method: 'get',
    url: 'https://palabras-aleatorias-public-api.herokuapp.com/random',
  })
    .then(response => console.log("La palabra recibida del servidor es:", response.data.body.Word));

