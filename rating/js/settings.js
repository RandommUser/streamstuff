var APIkey = "EC8C8CC2-1DE3-0C40-BCB3-11EB92ABB8BF704AED47-6AD2-4298-867B-307AA0AE0752"; //insert your API key, https://account.arena.net/applications

var posiColor = '#15c53c'; //color for positive rating
var negaColor = '#ff2626'; //color for negative rating
var neutColor = '#11baef'; //color for no gained or lost rating

var updateTimer = 100; // in seconds. NOTE: the API itself gets updated as set interval and using fequent request gets you ratelimited. Good pick is between 30-60 seconds.

var startRating; //give value, i.e. placement rating, for non-automated comparison
