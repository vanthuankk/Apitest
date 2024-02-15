exports.name = '/threads/infouser';
exports.index = async(req, res, next) => {
const keyword = req.query.keyword; 
if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
if (!keyword) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình ' });
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://threads-by-meta-threads-an-instagram-app-detailed.p.rapidapi.com/get_user',
  params: {user_id: keyword},
  headers: {
    'X-RapidAPI-Key': 'fd92cf57c9msh1f7b78b804353c7p1548f3jsn69db0304865d',
    'X-RapidAPI-Host': 'threads-by-meta-threads-an-instagram-app-detailed.p.rapidapi.com'
  }
};

  try {
      const response = await axios.request(options);
      console.log(response.data);
      return res.json(response.data);
    } catch (error) {
      console.error(error);
      return res.json({ error: 'Có lỗi xảy ra khi tải thông tin từ API' });
    }
  };
