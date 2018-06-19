var APIkey = "EC8C8CC2-1DE3-0C40-BCB3-11EB92ABB8BF704AED47-6AD2-4298-867B-307AA0AE0752"; //insert your API key, https://account.arena.net/applications

var killsColor = "#91e410"
var rankColor = "#de9f28"

var updateTimer = 30; // in seconds. NOTE: the API itself gets updated as set interval and using fequent request gets you ratelimited. Good pick is between 30-60 seconds.
var switchTimer = 15; // in seconds.

var showRank = true; // show rank
var showKills = true; // show kills

var showAverageKills = true; //average kills per hour
var showGainedRanks = true; //show ranks gained during stream
