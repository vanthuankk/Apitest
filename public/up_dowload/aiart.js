
const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://ai-image-generator3.p.rapidapi.com/generate',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'fd92cf57c9msh1f7b78b804353c7p1548f3jsn69db0304865d',
    'X-RapidAPI-Host': 'ai-image-generator3.p.rapidapi.com'
  },
  data: {
    prompt: text,
    page: 1
  }
};

