$("#box1").css('backgroundImage','url(img/1.jpg)');
$("#box2").css('backgroundImage','url(img/2.jpg)');
$("#box3").css('backgroundImage','url(img/3.jpg)');
$("#box4").css('backgroundImage','url(img/4.jpg)');
$("#box5").css('backgroundImage','url(img/5.jpg)');
$("#box6").css('backgroundImage','url(img/6.jpg)');
$("#box7").css('backgroundImage','url(img/7.jpg)');
$("#box8").css('backgroundImage','url(img/8.jpg)');

$(".feedbackimg1").css('backgroundImage','url(img/4.jpg)');
$(".feedbackimg2").css('backgroundImage','url(img/3.jpg)');
$(".feedbackimg3").css('backgroundImage','url(img/5.jpg)');
$(".feedbackimg4").css('backgroundImage','url(img/7.jpg)');

$("#luxury").css('backgroundImage','url(img/luxury.jpg)');

var selectImg = ['','img/banner1.jpg','img/banner2.jpg','img/banner3.jpg'];
var selectMath = Math.floor(Math.random() * 3) + 1;

setInterval(function() {
    selectMath = Math.floor(Math.random() * 3) + 1;
    var selectRandom = selectImg[selectMath];
    document.getElementById('select').src = selectRandom;
},5000);