var separate_time = function(time){
var sec = Math.floor((time / 1000) % 60);
var min = Math.floor((time / 1000 / 60) % 60);
  var hours = Math.floor((time / 1000 / 60 / 60) % 24);
  var days = Math.floor( time / 1000 / 60 / 60 / 24);
  return [sec, min, hours, days];
}

var now =new Date();
var target = new Date(2020,7,24,0,0,0,0);
var diff = target.getTime() - now.getTime

