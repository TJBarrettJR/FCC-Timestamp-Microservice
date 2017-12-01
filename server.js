// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var date = require('date-and-time');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

app.get("/:date", function(req, res) {  
  if (parseInt(req.params.date)) {  // check if UNIX
    var unixConv = new Date(parseInt(req.params.date*1000));
    res.status(200).json({"unix": req.params.date, "natural": date.format(unixConv, 'MMMM D, YYYY')}); //
  } else if(date.isValid(req.params.date, 'MMMM D, YYYY')) { // check if written format
    var unixConv = new Date(req.params.date);
    res.status(200).json({"unix": parseInt(unixConv.getTime() / 1000), "natural": req.params.date});
  } else {
    res.status(400).json({"unix": null, "natural": null});
  }
});

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
