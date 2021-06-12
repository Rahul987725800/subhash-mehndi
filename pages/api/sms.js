const fast2sms = require('fast-two-sms');
const api_key =
  'mGySI3X6uPEjFeC5s9aUWAog8p2MiKbtdDBYvTnzVcNQHrhwqOLXk6OyThp2CzGBrg0cqDHNKoZFs8ld';
export default async (req, res) => {
  if (req.method === 'GET') {
    const response = await send('sample message');
    res.json({
      message: 'connected',
      response,
    });
  } else if (req.method === 'POST') {
    const response = await send(req.body.message);
    res.json({
      message: 'send sms',
      response,
    });
  }
};
const send = async (message) => {
  var options = {
    authorization: api_key,
    message,
    numbers: ['9877258740'],
  };
  return fast2sms.sendMessage(options);
};
