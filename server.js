var express = require('express');

var app = express();

var weather = require('weather-js');

app.set('view engine', 'ejs');

app.get('/', function (req,res) {

    weather.find({search: 'Davao City, PH', degreeType: 'C'}, function(err, result) {
        var weather_data = null;
        if(err) console.log(err);
       
        //console.log(JSON.stringify(result, null, 2));
        weather_data = result;

        res.render('index.ejs', {weather: weather_data});
      });   
})
app.get('/other', function (req,res) {

    // weather.find({search: 'Davao City, PH', degreeType: 'C'}, function(err, result) {
    //     var weather_data = null;
    //     if(err) console.log(err);
       
    //     //console.log(JSON.stringify(result, null, 2));
    //     weather_data = result;

        res.render('other.ejs');
    //   });   
})


app.listen(8000);
