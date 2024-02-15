exports.name = '/ytb/trending';
exports.index = async (req, res, next) => {
  const keyword = req.query.keyword;
  if (!keyword) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình ' });
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/trending',
  params: {
    type: keyword,
    hl: 'en',
    gl: 'VN'
  },
  headers: {
    'X-RapidAPI-Key': 'fd92cf57c9msh1f7b78b804353c7p1548f3jsn69db0304865d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

try {
    const response = await axios.request(options);
    console.log(response.data);
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    return res.json({ error: 'Có lỗi xảy ra khi tải xuống dữ liệu từ Youtube' });
  }
};
