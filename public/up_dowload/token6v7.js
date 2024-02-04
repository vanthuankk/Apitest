exports.name = '/token6v7';
exports.index = async (req, res, next) => {
  const { user, pass, twofa } = req.query;
  
  if (!user || !pass || !twofa) {
    return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình ' });
  }

  const axios = require('axios');

  const options = {
    method: 'POST',
    url: 'https://facebook-media-api.p.rapidapi.com/user/token',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'fd92cf57c9msh1f7b78b804353c7p1548f3jsn69db0304865d',
      'X-RapidAPI-Host': 'facebook-media-api.p.rapidapi.com'
    },
    data: {
      username: user,
      password: pass,
      twofa: twofa
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    return res.json({ error: 'Có lỗi xảy ra khi tải video từ API' });
  }
};
