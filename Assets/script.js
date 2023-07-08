// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // 1  $(".saveBtn").on("click", function() {
  //      console.log(this);
  //      figure out what hour block you're in using $(this)
  //      key names needs to match the key names for getItem localStorage
  //      setItem to localStorage to save text inputs to corresponding hour by using "this"
  //        }) 
  $(".saveBtn").on("click", function (){
    var tasks = $(this).siblings(".description").val()
    console.log($(this).siblings())
    localStorage.setItem("#hour", tasks)
  })
  //First
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  // 1) document.querySelectorAll(".time-block ")
  //  Must use jquery ->  can use jquery.children to select child elements 
  for(var i = 9; i < 18; i++){
    var textarea=$("#hour-"+i).children("textarea") 
    if(currentHour===i) {
      textarea.addClass("present");
    } else if(currentHour > i){
      textarea.addClass("past");
    } else {
      textarea.addClass("future");
    }
  }

  //   timeBlock = $("#time-block")
  //   if (currentHour > timeBlock) {
  //     timeBlock.addClass("future")
  //   }
  // }

  // 2) use dayjs() to grab the current time, specifically the hour
  // 3) use a for loop to iterate over all time blocks
  //    -> inside for loop, selected the time block 
 
//  this loop runs til 18, which is 5pm in military time
  for (var i = 9; i < 18; i++) {
    document.querySelector("#hour-" + i) 
  }
  //    a. use if statements to compare the current hour to the hour on the block
  //    b. if the current hour is less than time block, apply future class
  //    c. else if the current hour is equal to time block, apply class present 
  //    d. else if the current hour is greater than time block, apply past class
  //    e. else time block class is future
  //  !!!! MAKE SURE ALL TIME BLOCK REMOVE CLASSES THAT WE DON'T WANT


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // 1. getItem for localStorage to pull previously stored content
  // localStorage.getItem("keyname")  
  //    a. seperate key in localStorage for each hour
  //    b. create a loop to check each hour if they have already saved tasks
  //       if there are tasks stored, display tasks on the HTML
  //       (need to find a way to select the corresponding text area, could do id of timeblock, then .children.1 jquery method)
//          (may not need if statement if localStorage key = null, can potentially obtain null value harmlessly)
  //
  // TODO: Add code to display the current date in the header of the page.
  // 1. create var day = dayjs() to get current date (add time for extra credit)
  // $("#currentDay").text(dayjs().format("MMM DD,YYYY,  h:mm:ss"));
// 
});
$("#currentDay").text(dayjs().format("MMM-DD-YYYY, h:mm:ss"));