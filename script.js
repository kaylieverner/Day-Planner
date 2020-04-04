//Display current date at the top of the calendar 
var date = moment().format("MMMM Do YYYY");
$("#currentDay").text(date);

// Local storage to save events entered on calendar 

var timeBlock9 = $(".input-box9");
var timeBlock10 = $(".input-box10");
var timeBlock11 = $(".input-box11");
var timeBlock12 = $(".input-box12");
var timeBlock1 = $(".input-box1");
var timeBlock2 = $(".input-box2");
var timeBlock3 = $(".input-box3");
var timeBlock4 = $(".input-box4");
var timeBlock5 = $(".input-box5");
var saveBtn = $(".saveBtn");

getEvents();

function getEvents() {
    // Get stored events from localStorage
    // Parsing the JSON string to an object
    var lastLogs = JSON.parse(localStorage.getItem("eventLogs"));
    console.log(lastLogs);
    timeBlock9.val(lastLogs.log9);
    timeBlock10.val(lastLogs.log10);
    timeBlock11.val(lastLogs.log11);
    timeBlock12.val(lastLogs.log12);
    timeBlock1.val(lastLogs.log1);
    timeBlock2.val(lastLogs.log2);
    timeBlock3.val(lastLogs.log3);
    timeBlock4.val(lastLogs.log4);
    timeBlock5.val(lastLogs.log5);
};

function storeEvents() {

    var eventLogs = {
        log9: $.trim(timeBlock9.val()),
        log10: $.trim(timeBlock10.val()),
        log11: $.trim(timeBlock11.val()),
        log12: $.trim(timeBlock12.val()),
        log1: $.trim(timeBlock1.val()),
        log2: $.trim(timeBlock2.val()),
        log3: $.trim(timeBlock3.val()),
        log4: $.trim(timeBlock4.val()),
        log5: $.trim(timeBlock5.val())
    };
    // Stringify and set "events" key in localStorage to events array
    localStorage.setItem("eventLogs", JSON.stringify(eventLogs));
};

// When save button is clicked 
saveBtn.click(function (event) {
    event.preventDefault();

    // Store updated todos in localStorage
    storeEvents();
});

//Compare current time to color the calendar blocks accordingly 
var currentTime = moment().format("HH");  
console.log(typeof(currentTime));
console.log(currentTime);

checkCurrentTime();

function checkCurrentTime() {
    var timeValue = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
    var timeBlockArray = [timeBlock9, timeBlock10, timeBlock11, timeBlock12, timeBlock1, timeBlock2, timeBlock3, timeBlock4, timeBlock5]; 

    for (i=0; i<timeValue.length; i++) {
        console.log(currentTime);
        console.log(timeValue[i]);
        if (currentTime == timeValue[i]) {
            timeBlockArray[i].addClass("present");
        } else if (currentTime > timeValue[i]) {
            timeBlockArray[i].addClass("past");
        } else if (currentTime < timeValue[i]) {
            timeBlockArray[i].addClass("future");
        }
    };

};