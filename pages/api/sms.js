const fast2sms = require('fast-two-sms');

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
    authorization: process.env.SMS_API_KEY,
    message,
    numbers: [process.env.SMS_RECEIVER],
  };
  return fast2sms.sendMessage(options);
};
