currentHour = dayjs().format("H")

$(function () {
  
  $(".saveBtn").on("click", function (){
    var tasks = $(this).siblings(".description").val()
    var taskKey = $(this).parent().attr("id")
    // console.log($(this).parent())
    localStorage.setItem(taskKey, tasks)
  })

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

  for(var i = 9; i < 18; i++) {
  var getTask = localStorage.getItem(`hour-${i}`)
  var getHour = $(`#hour-${i}`).children(".description")

  getHour.append(getTask)

  }
 
});
$("#currentDay").text(dayjs().format("MMM-DD-YYYY, h:mm:ss"));