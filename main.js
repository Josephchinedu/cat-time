var wakeUpTime = 7;
var noon = 12;
var lunchtime = 12;
var napTime = lunchtime + 2;
var partyTime;
var evening = 18;


/* ::::::: Show Current Time ::::: */
var showCurrentTime = function() {
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = 'AM';


    //Set Hours

    if (hours >= noon) {
        meridian = 'PM'
    }

    if (hours > noon) {
        hours = hours - 12;
    }


    //Set  Minutes
    if (minutes < 10) {
        minutes = '0' + minutes;
    }


    //Set Seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
    clock.innerText = clockTime;

};

//Getting the clock to increase on it's own
var updateClock = function() {
    var time = new Date().getHours();
    var messageText;
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

    var timeEventJs = document.getElementById('timeEvent');

    var localImageJs = document.getElementById('lolcatImage');

    if (time == partyTime) {
        image = "download.jpeg";
        messageText = "Let's Party";

    } else if (time == wakeUpTime) {
        image = "cat1.jpg";
        messageText = "wake up"
    } else if (time == lunchtime) {
        image = "lunch-is-swimming_o_5188631.jpg";
        messageText = "Let's have some lunch";
    } else if (time == napTime) {
        image = "cat3.jpg";
        messageText = "Sleep tight";
    } else if (time < noon) {
        image = "560c908a8100b47f4e595b433f730198.jpg";
        messageText = "Good Morning";
    } else if (time >= evening) {
        image = "Cat_sleep.jpg";
        messageText = "Good Evening";
    } else {
        image = "tenor.gif";
        messageText = "Good Afternoon";
    }

    timeEventJs.innerText = messageText;
    localImageJs.src = image;



    showCurrentTime();
};

updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);


// Getting the time button to work

var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function() {
    if (partyTime < 0) {
        partyTime = new Date().getHours();
        partyTimeButton.innerText = "Party Over";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    } else {
        partyTime = -1;
        partyTimeButton.innerText = "Party Time";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener('click', partyEvent);
partyEvent();


//Activate wake-up selector

var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');

var wakeUpEvent = function() {
    wakeUpTime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('change', wakeuptime);

// Activates Lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function() {
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function() {
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);