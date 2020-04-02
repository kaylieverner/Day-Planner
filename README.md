# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria
//order to build: 

//build out layout for timeblocks from 9-5
//datastructure 
//compare times 


```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar

//use the moment function to insert the date 

WHEN I scroll down
THEN I am presented with timeblocks for standard business hours

// create HTML elements (boostrap cards? styled divs?) timeblocks for hours of 9-5
//give them IDs for manipulation and data storage later 

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future

//moment query for is before, is same, is after
//use IDs to differentiate?
//datastructure for timeblocks and time & query against the object to find the time 
//array representing the time blocks. run moment time compares on the array elements and manipulate the DOM elements they represent.

WHEN I click into a timeblock
THEN I can enter an event

//timeblocks should be input fields of some sort
//

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage

//we have a save button 
//click listener on save button 
//inside click listener we do logic that stores the input values into local storage 

WHEN I refresh the page
THEN the saved events persist

//on page load, we should access local storage to populate the timeblocks 

```

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
