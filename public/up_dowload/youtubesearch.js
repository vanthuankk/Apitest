exports.name = '/youtube/search';
exports.index = async (req, res, next) => {
  const keyword = req.query.keyword;
  if (!keyword) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình.' });

  const axios = require('axios');
  const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/search/',
    params: { q: keyword },
    headers: {
      'X-RapidAPI-Key': 'fd92cf57c9msh1f7b78b804353c7p1548f3jsn69db0304865d',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    return res.json({ error: 'Có lỗi xảy ra khi tìm kiếm trên YouTube.' });
  }
};
