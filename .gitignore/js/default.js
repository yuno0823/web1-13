var separate_time = function(time){
var sec = Math.floor((time / 1000) % 60);
var min = Math.floor((time / 1000 / 60) % 60);
  var hours = Math.floor((time / 1000 / 60 / 60) % 24);
  var days = Math.floor( time / 1000 / 60 / 60 / 24);
  return [sec, min, hours, days];
}

var update = function(){
var now =new Date();
var target = new Date(2020,7,24,0,0,0,0);
var diff = target.getTime() - now.getTime
var counter = separate_time(diff);
document.getElementById('countdoun').textContet = 
  '東京オリンピックまであと   '　+
  counter[3] + '日'　+
  counter[2] + '時間'　+
  counter[1] + '分'　+
  counter[0] + '秒';
refresh();
}

var refresh= function{
setTimeout(update, 1000);
}
update();

document.getElementById('form').select.onchange = function(){
iocation.href = document.getElementaById('form').select.value;
}

function getFileName(){
return window.iocation.href.split('/').pop;
}

var filename = getFileName();
var opt;
if(filename === 'other.html'){
opt =document.querySelector('option[value="other.html"]');
}else{
  opt =document.querySelector('option[value="index.html"]');
}
opx.selected = true;

document.getElementById('form').select.onchange = function(){
  location.href = document.getElementById('form').select.value;
}
