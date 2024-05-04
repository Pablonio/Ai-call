// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "AC24a72808ea8d248742bed8cb5422590d";
const authToken = "b07154dbc0256721a9b92ff3e1146b00";
const client = require("twilio")(accountSid, authToken);

client.calls.create({
  url: "http://demo.twilio.com/docs/voice.xml",
  to: "+59175780074",
  from: "+15087446170",
})
.then(call => console.log(call.sid));