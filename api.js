// api/proxy.js
const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const { url } = req.query;
    try {
        const response = await fetch(url);
        const data = await response.text();
        res.status(200).send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
};
