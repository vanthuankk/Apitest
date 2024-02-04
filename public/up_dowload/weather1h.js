const axios = require('axios');

exports.name = '/weather1h';
exports.index = async (req, res, next) => {
  const loca = req.query.loca;
  if (!loca) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình' });

  const options = {
    method: 'GET',
    url: 'https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast',
    params: {
      location: loca,
      timesteps: '1h'
    },
    headers: {
      'X-RapidAPI-Key': 'fd92cf57c9msh1f7b78b804353c7p1548f3jsn69db0304865d',
      'X-RapidAPI-Host': 'tomorrow-io1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    return res.json({ error: 'Có lỗi xảy ra khi tải dữ liệu thời tiết từ API' });
  }
};
