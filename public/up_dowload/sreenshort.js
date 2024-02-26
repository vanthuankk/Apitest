const axios = require('axios');

exports.name = '/capwall/:uid/:cookies';
exports.index = async (req, res, next) => {
    try {
        const { uid, cookies } = req.params;
        const options = {
            method: 'GET',
            url: `https://facebook.com/${uid}/`,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'Accept-Language': 'en-US,en;q=0.9',
                'Sec-Fetch-Dest': 'document',
                'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-Site': 'none',
                'Upgrade-Insecure-Requests': '1',
                'Cookie': cookies
            }
        };
        const response = await axios(options);
        res.send(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
