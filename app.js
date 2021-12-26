
const h2 = document.querySelector('#time');
const h3 = document.querySelector('#date');
const btn = document.querySelector('#color');

function showTime(){
    const DATE = new Date();
    var h = DATE.getHours();
    var m = DATE.getMinutes();
    var s = DATE.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    h2.innerHTML = h + ':' + m + ':' + s;
}

setInterval(showTime,500);

function checkTime(i){
    if (i < 10) {i = "0" + i};
    return i;
}

function showDate(){
    const DATE = new Date();
    var d = DATE.getDate();
    var m = DATE.getMonth()+1;
    var y = DATE.getFullYear();
    h3.innerHTML = d + '.' + m + '.' + y;
}

showDate();

const COLORS = ['red', 'green', 'white', 'aqua', 'orange' , 'yellow'];


btn.addEventListener('click' , function(){
    for(i = 0; i < COLORS.length; i++){
        var color = COLORS[Math.floor(Math.random()*COLORS.length)];
        document.body.style.color = color;
        btn.style.color = "white";
        btn.style.backgroundColor = color;
    }
});





