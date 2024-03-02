exports.name = '/aiart';
exports.index = async (req, res, next) => {
  const text = req.query.text;
  if (!text) return res.status(400).json({ error: 'Hãy nhập từ muốn AI vẽ' });
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

try {
    const response = await axios.request(options);
    console.log(response.data);
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Có lỗi xảy ra khi sử dụng dịch vụ AI Drawing' });
  }
};
