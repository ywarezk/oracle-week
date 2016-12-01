/**
 * node express entry point
 */

var Express = require('express');
var app = Express();

var mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

var router = require('./routes/task.route');

var bodyParser = require('body-parser');

app.use(bodyParser.json())

app.use('/api', router);

app.listen(8000, function(){
    console.log('my server is running on port 8000');
})
