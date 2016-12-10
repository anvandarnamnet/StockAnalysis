var express = require('express');
var app = express();
var schema = require(__dirname + '/Schema');
app.set('port', (process.env.PORT || 5000));
var processor = require(__dirname + "/processor");

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/api',function(request,response){
  var startDate = request.query.date;
  var stockName = request.query.stockname;
  returnString = processor.remove_info(stockName, startDate);
  returnString.then(function(returnedStuff){
        response.send(returnedStuff);
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
