
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://spotify-scraper.p.rapidapi.com/v1/track/download/soundcloud',
  params: {
    track: keyword
  },
  headers: {
    'X-RapidAPI-Key': 'fd92cf57c9msh1f7b78b804353c7p1548f3jsn69db0304865d',
    'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
  }
};

