var currentHour = dayjs().format("H")

$(function () {
  
  //created an event listener to each button on the daily planner. Each button will only listen to itself
  //and save the task from the button's parent timeblock
  $(".saveBtn").on("click", function (){
    var tasks = $(this).siblings(".description").val()
    var taskKey = $(this).parent().attr("id")
    localStorage.setItem(taskKey, tasks)
  })

  // Loop through each timeblock and compare it to the current hour and then add an
  // appropriate time class based on the current time vs the timeblock's hour
  for (var i = 9; i < 18; i++) {
    var textarea = $(`#hour-${i}`); 
    if (currentHour==i) {
      textarea.addClass("present");
    } else if (currentHour > i) {
      textarea.addClass("past");
    } else {
      textarea.addClass("future");
    }
  }

  // on application load, check local storage for anything, and if there are any saved tasks, append them to 
  // their relative timeblocks
  for(var i = 9; i < 18; i++) {
  var getTask = localStorage.getItem(`hour-${i}`)
  var getHour = $(`#hour-${i}`).children(".description")

  getHour.append(getTask)

  }
 
});
$("#currentDay").text(dayjs().format("MMM-DD-YYYY, h:mm:ss"));