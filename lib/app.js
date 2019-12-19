var express = require('express');
var cors = require('cors'); // Cors to send/receive data in JSON format
var path = require('path'); // To set the public path where the index.html is saved
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // To support JSON-encoded bodies
app.use(express.json()); // To support JSON-encoded bodies
var port = process.env.PORT || 3000; // Set the server port (to listen)
var clear = require('clear'); // To cleat screen
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'public')));

// **************************************************************************
// ************** Routes ****************************************************
//console.log(app);
require('./routes/poll')(app);

// **************************************************************************
// ************** Start *****************************************************
//clear(); //clear screen
console.log(' ***** Start session *** ');
console.log(' *****               *** ');
app.listen(port, function() {
  console.log('App started on port:', port);
});

module.exports = app; // Export the module
