const accountSid = 'AC0e14a3c260f511f239b350202c2f01fa';


const authToken ='8ed99a8a455938643c3b5508d6ea28d3';
const client = require('twilio')(accountSid, authToken, {
  lazyLoading: true
});


 const sendMessage = async (message, senderID='whatsapp:+919877258740') => {
  try {
    const messageSent = await client.messages.create({
      to: senderID,
      body: message,
      from: 'whatsapp:+14155238886'
    })
    console.log(messageSent)
  } catch(error) {
    console.log(error)
  }
}
export default async (req, res) => {
  if (req.method === 'GET') {
    res.send('connected');
  } else if (req.method === 'POST') {
    console.log(req.body);
    // let message = req.body.Body;
    // let senderID = req.body.From;
    // console.log(message)
    // console.log(senderID)
    // // Write a function to send message back to whatsapp
    // await sendMessage('Hello from other side', senderID)
    await sendMessage(req.body.message)
    res.json({
      sendMessage: req.body.message
    })
  }
};
