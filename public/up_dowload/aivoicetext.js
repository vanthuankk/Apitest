exports.name = '/voiceai';
exports.index = async (req, res, next) => {
  const keyword = req.query.keyword;
  if (!keyword) {
    return res.status(400).json({ error: 'Thiếu dữ liệu để khởi chạy chương trình' });
  }

  const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://tts79.p.rapidapi.com/tts/elevenlabs',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'fd92cf57c9msh1f7b78b804353c7p1548f3jsn69db0304865d',
    'X-RapidAPI-Host': 'tts79.p.rapidapi.com'
  },
  data: {
    model_id: 'eleven_multilingual_v2',
    voice_id: '21m00Tcm4TlvDq8ikWAM',
    text: keyword,
    similarity_boost: 0.75,
    stability: 0.5,
    use_speaker_boost: true
  }
};

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    if (error.response) {
      
      return res.status(error.response.status).json({ error: 'Có lỗi xảy ra khi tải xuống dữ liệu' });
    } else if (error.request) {
      
      return res.status(500).json({ error: 'Có lỗi xảy ra khi gửi yêu cầu' });
    } else {
      
      return res.status(500).json({ error: 'Có lỗi xảy ra' });
    }
  }
};
