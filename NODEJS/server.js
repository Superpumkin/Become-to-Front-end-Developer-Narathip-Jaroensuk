const express = require('express');
const app = express();

app.get('/user', function(req, res) {
  var id = req.query.id;
  var name = req.query.name;

  console.log('id = ' + id);
  console.log('name = ' + name)
});

app.get('/user/:id', function(req, res) {
  var id = req.params.id;
  console.log('id = ' + id);
  res.send(req.params);
});

app.get('/', function(req, res) {
  res.send('Hello World! I\'m on the road to Front-End Developer.');
});

app.get('/example', function(req, res) {
  res.send('Good job!');
}); 

const port = 8000;
app.listen(port, function() {
  console.log('Server is running on port: ' + port);
});

module.exports = app;