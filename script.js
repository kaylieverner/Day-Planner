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





//order to build: 

//build out layout for timeblocks from 9-5 -- DONE 
//datastructure 
//compare times 



// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// //moment query for is before, is same, is after
// //use IDs to differentiate?
// //datastructure for timeblocks and time & query against the object to find the time 
// //array representing the time blocks. run moment time compares on the array elements and manipulate the DOM elements they represent.

// WHEN I click into a timeblock
// THEN I can enter an event

// //timeblocks should be input fields of some sort
// //

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// //we have a save button 
// //click listener on save button 
// //inside click listener we do logic that stores the input values into local storage 

// WHEN I refresh the page
// THEN the saved events persist

// //on page load, we should access local storage to populate the timeblocks 







//Compare current time to schedule to color the calendar blocks accordingly 
// var currentTime = moment().format("H");  
// console.log(currentTime);

// var timeBlocks = {
//     tb9: "9",
//     tb10: "10",
//     tb11: "11",
//     tb12: "12",
//     tb1: "13",
//     tb2: "14",
//     tb3: "15",
//     tb4: "16",
//     tb5: "17"
// };

// function checkCurrentTime() {
//     if (moment().isSame(currentTime)) {

//     } else if (moment().isBefore(currentTime)) {

//     } else (moment().isAfter(currentTime)) {

//     }
// }; 