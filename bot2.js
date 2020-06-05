console.log('bot is starting');

var Twit = require('twit');
var config =  require('./config');

var T = new Twit(config);

var parm = {
	 q: 'Donal Trump',
	 count: 5,
	 lang: 'en'
};

T.get('search/tweets', parm, gotData);

function gotData(err,data,response){
	var tweets = data.statuses;
	for(var i = 0; i < tweets.length; i++){
		console.log(tweets[i].user.name + ": " + tweets[i].text);
		console.log("    ");
	}

}