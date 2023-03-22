$(function () {
  //display the current date on the header
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));

  // function for the save button on click to store the text to the local storage
  $('.saveBtn').on('click', function () {
    var hour = $(this).parent().attr('id');
    var description = $(this).siblings('.description').val();
    localStorage.setItem(hour, description);
  });

  // display the proper background color according to past, present, or future
  $('.time-block').each(function () {
    var currentHour = dayjs().hour();
    var hour = parseInt($(this).attr('id').replace('hour-', '')); // pull the integer from the (hour-17) by removing the hour-
    // add the appropriate classes of past present future depending on the time of day compared to the time slot
    if (hour < currentHour) {
      $(this).addClass('past');
    } else if (hour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });

  // This code goes through the time block class and retrieves the description data from the local storage
  $('.time-block').each(function () {
    var hour = $(this).attr('id');
    var description = localStorage.getItem(hour);
    if (description) {
      $(this).children('.description').val(description);
    }
  });
});
