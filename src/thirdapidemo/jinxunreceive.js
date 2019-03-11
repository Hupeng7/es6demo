var req = require("request");
req.get("http://61.129.57.157:7891/mo?un=400107&pw=uisdfus107",
  function (err, resp, body) {
    console.log(body);
  });