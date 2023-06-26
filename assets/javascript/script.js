$(function () {

  // Add a listener for click events on the save button
  $(".saveBtn").on("click", function () {
    var blockId = $(this).closest(".time-block").attr("id");
    var enteredText = $(this).siblings(".description").val();

    // Save the user input in local storage using the blockId as the key
    localStorage.setItem(blockId, enteredText);
  });


  // Display the current date in the header of the page
  function updateTime() {
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

  // Get user input from localStorage and set the values of corresponding textarea elements
  $(".time-block").each(function () {
    var blockId = $(this).attr("id");
    var storedText = localStorage.getItem(blockId);

    if (storedText) {
      $(this).find(".description").val(storedText);
    }
  });

  updateTime();
  setInterval(updateTime, 1000);

});