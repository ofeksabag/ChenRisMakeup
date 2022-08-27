// LOAD IMAGES
for(var i=1; i<9; i++) {
    document.getElementById('projects').innerHTML += '<img src="assets/images/' + i + '.jpg">';
}

// BANNER
var selectImg = ['','assets/images/banner1.jpg','assets/images/banner2.jpg','assets/images/banner3.jpg'];
var selectMath = Math.floor(Math.random() * 3) + 1;

setInterval(function() {
    selectMath = Math.floor(Math.random() * 3) + 1;
    var selectRandom = selectImg[selectMath];
    document.getElementById('banner').src = selectRandom;
},5000);