const express = require('express');
const spoj = require('./routes/spoj_comparator');

var app = express();

const port = process.env.port || 5000;

app.use(function(req, res, next) {
    res.header("access-control-allow-origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get('/', function(req, res) {
    var user1 = req.query.handle1;
    var user2 = req.query.handle2;
    spoj.compareProfile(user1, user2, function(err, data) {
        if(err) {
            console.log(err);
            return err;
        }
        else {
            res.send(data);
        }
    });
});

app.listen(port, function() {
    console.log("Running on port "+port); 
});
