exports.name = '/allinone';
exports.index = async (req, res, next) => {
  const link = req.query.link;
  if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
  if (!link) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình' });

  const axios = require('axios');

  const options = {
    method: 'POST',
    url: 'https://all-media-downloader-v2.p.rapidapi.com/dl',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'c320de0ac9msh8c90df54d8babafp144ae9jsn419b1c1a8f14',
      'X-RapidAPI-Host': 'all-media-downloader-v2.p.rapidapi.com'
    },
    data: { url: link }
  };

  try {
    const response = await axios.request(options);
    if (response.status === 200) {
      console.log(response.data);
      return res.json(response.data);
    } else {
      return res.json({ error: 'Có lỗi xảy ra khi tải xuống dữ liệu ' });
    }
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
      return res.json({ error: error.response.data });
    } else if (error.request) {
      console.error('Error request:', error.request);
      return res.json({ error: 'Yêu cầu tới server không có phản hồi' });
    } else {
      console.error('Error:', error.message);
      return res.json({ error: 'Có lỗi xảy ra khi gửi yêu cầu' });
    }
  }
};
