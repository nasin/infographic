var pollHelpers = require('../poll.helpers'); //call the db file

// ************** Host polls  ***********************************************

// ************** Receive the host poll request
module.exports = app => {
  app.post('/hostPoll', function(req, res) {
    //let tempUpDatedPolls = [0, 0, 0, 0],
    let hostPollsReceived = req.body.answers;

    pollHelpers
      .postHostData(hostPollsReceived)
      .then(data => {
        return res.send(data);
      })
      .catch(err => {
        res.send(err);
      });
  });

  // ************** Request data from the db
  app.get('/hostPollGET', function(req, res) {
    pollHelpers
      .getHostData()
      .then(data => {
        return res.send(data);
      })
      .catch(err => {
        res.send(err);
      });
  });

  // **************

  // **************************************************************************
  // *************** Player polls *********************************************

  // ************** Receive the player poll request

  app.post('/playerPoll', function(req, res) {
    var playerPollsReceived = req.body.answers;
    pollHelpers
      .postPlayerData(playerPollsReceived)
      .then(data => {
        return res.send(data);
      })
      .catch(err => {
        res.send(err);
      });
  });

  // ************** Request data from the db
  app.get('/playerPollGET', function(req, res) {
    pollHelpers
      .getPlayerData()
      .then(data => {
        return res.send(data);
      })
      .catch(err => {
        res.send(err);
      });
  });
};

//module.exports = app; // Export the module
