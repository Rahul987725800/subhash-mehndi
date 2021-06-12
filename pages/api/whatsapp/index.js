const accountSid = 'AC0e14a3c260f511f239b350202c2f01fa';

const authToken = '8ed99a8a455938643c3b5508d6ea28d3';
const client = require('twilio')(accountSid, authToken, {
  lazyLoading: true,
});

const sendMessage = async (message) => {
  try {
    const messageSent = await client.messages.create({
      to: 'whatsapp:+919877258740',
      body: message,
      from: 'whatsapp:+14155238886',
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
      messageSent,
    });
  }
};
