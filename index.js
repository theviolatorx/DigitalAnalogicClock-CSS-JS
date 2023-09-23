let hours = document.getElementById('hour');
let minutes = document.getElementById('minute');
let seconds = document.getElementById('second');
let ampm = document.getElementById('ampm');


setInterval(() => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let hr = document.querySelector("#hr");
    let mn = document.querySelector("#mn");
    let sc = document.querySelector("#sc");
    
    var am = h >= 12 ? "PM" : "AM";

    // convert 24hrs clock to 12hours clock
    // if (h > 12){
    //     h = h - 12;
    // }

    // add zero before singl digit number
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

    hr.style.transform = `rotateZ(${h * 30}deg)`;
    mn.style.transform = `rotateZ(${m * 6}deg)`;
    sc.style.transform = `rotateZ(${s * 6}deg)`;

})
