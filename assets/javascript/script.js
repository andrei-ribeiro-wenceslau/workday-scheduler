// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // Display the current date in the header of the page
  function updateTime () {
    currentDate = dayjs().format("dddd, MMMM D, YYYY - hh:mm:ss A");
    $("#currentDay").text(currentDate);
  }

// Apply the past, present, or future class to each time block
  
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    var currentHour = dayjs().hour();

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

updateTime ();
setInterval(updateTime, 1000);


});