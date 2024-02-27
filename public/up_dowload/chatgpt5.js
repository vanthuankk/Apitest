const axios = require('axios');

exports.name = '/chatgpt5';
exports.index = async (req, res, next) => {
  const text = req.query.text;

  if (require('../API_KEY/data/check_api_key.js').check_api_key(req, res)) return;
  if (!text) {
    return res.status(400).json({ error: 'Thiếu dữ liệu để khởi chạy chương trình' });
  }

  try {
    const response = await askChatGPT(text);
    console.log(response.data);
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Có lỗi xảy ra khi AI trả lời' });
  }
};

async function askChatGPT(text) {
  const options = {
    method: 'POST',
    url: 'https://chatgpt-gpt4-5.p.rapidapi.com/ask',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'd0ab76bc06msh5032ca2f6f3baf9p15f9d8jsn024d834a55cb',
      'X-RapidAPI-Host': 'chatgpt-gpt4-5.p.rapidapi.com'
    },
    data: {
      query: text
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
