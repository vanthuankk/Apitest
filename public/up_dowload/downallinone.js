const axios = require('axios');

exports.name = '/downall';
exports.index = async (req, res, next) => {
  const link = req.query.link;
  if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
  if (!link) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình' }); 

  const options = {
    method: 'POST',
    url: 'https://social-download-all-in-one.p.rapidapi.com/v1/social/autolink',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'fd92cf57c9msh1f7b78b804353c7p1548f3jsn69db0304865d',
      'X-RapidAPI-Host': 'social-download-all-in-one.p.rapidapi.com'
    },
    data: { url: link }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    return res.json({ error: 'Có lỗi xảy ra khi tải tệp từ API' });
  }
};
