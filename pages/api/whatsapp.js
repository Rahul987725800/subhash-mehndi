const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
  {
    lazyLoading: true,
  }
);

const sendMessage = async (message) => {
  try {
    const messageSent = await client.messages.create({
      to: process.env.WHATSAPP_TO,
      body: message,
      from: process.env.WHATSAPP_FROM,
    });
    // console.log(messageSent)
    return messageSent;
  } catch (error) {
    console.log(error);
  }
};
// 'whatsapp:+14155238886',
export default async (req, res) => {
  if (req.method === 'GET') {
    res.json({
      message: 'connected',
    });
  } else if (req.method === 'POST') {
    console.log(req.body);
    const message = req.body.Body;
    const senderId = req.body.From;
    console.log(message);
    console.log(senderId);
    res.send();
  } else if (req.method === 'PUT') {
    const messageSent = await sendMessage(req.body.message);
    res.json({
      message: 'send whatsapp',
      messageSent,
    });
  }
};
