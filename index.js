let hours = document.getElementById('hour');
let minutes = document.getElementById('minute');
let seconds = document.getElementById('second');
let ampm = document.getElementById('ampm');


setInterval(() => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    var am = h >= 12 ? "PM" : "AM";

    
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

})
