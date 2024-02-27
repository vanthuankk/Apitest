exports.name = '/chatgpt5';
exports.index = async (req, res, next) => {
  const text = req.query.text;

  // Kiểm tra dữ liệu đầu vào
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Vui lòng nhập từ muốn GPT trả lời' });
  }

  const axios = require('axios');
  const rapidApiKey = 'd0ab76bc06msh5032ca2f6f3baf9p15f9d8jsn024d834a55cb';
  const rapidApiHost = 'chatgpt-gpt4-5.p.rapidapi.com';
  const gptApiUrl = 'https://chatgpt-gpt4-5.p.rapidapi.com/ask';

  const options = {
    method: 'POST',
    url: gptApiUrl,
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': rapidApiHost
    },
    data: {
      query: text
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Có lỗi xảy ra khi sử dụng dịch vụ GPT' });
  }
};
