// sudocode:
//get the users starter line
//get the users starter station
//get users destination station
//first calculate how many stops until Union Square from the starter point
//then calculate how many stops from Union Square to their destination
//give them the added stops

var allLines = ["nLine", "lLine", "6Line"]

var startLine = document.getElementsByClassName("selectedLine")

var Nline = startLine[0]
Nline.addEventListener("click", function(){
  console.log("slected N line");
});

var Lline = startLine[1]
Lline.addEventListener("click", function(){
  console.log("selected L line");
});

var sixline = startLine[2]
sixline.addEventListener("click", function(){
  console.log("selected 6 line");
});

var stations = ["N Times Square", "Union Square", "N 34th", "N 28th", "N 23rd", "N 8th", "L 8th", "L 6th", "L 3rd", "L 1st", "6 AstoR Place", "6 28th", "6 23rd", "6 33rd", "Grand Central"]

var startStation = document.getElementsByClassName("startStations")
var stationSelect = document.getElementsByClassName("stations") 


//this one adds clicks to the destination
for (var i = 0; i < stations.length; i++){
    var stationFinish = stationSelect[i];
    stationFinish.addEventListener("click", blindClick(i));
    }
//this one adds clicks to the starting station
for (var i = 0; i < stations.length; i++){
    var stationStart = startStation[i];
    stationStart.addEventListener("click", blindClick(i));
    }

    function blindClick(i) {
      return function(){
        console.log("you selected " + stations[i])
      }
    };











