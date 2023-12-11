// Make AJAX call on page load
$(document).ready(function () {
  $.ajax({
    url: "http://numbersapi.com/1/30/date?json",
    method: "GET",
    success: function (data) {
      $("#ajax-content").text(data.text);
      // You can also add the information to some area on the page as specified
    },
    error: function () {
      console.error("Error fetching data from API");
    },
  });

  // Set up image drag and drop
  $("#image-upload").on("dragover", function (e) {
    e.preventDefault();
    $(this).addClass("dragging");
  });

  $("#image-upload").on("dragleave", function () {
    $(this).removeClass("dragging");
  });

  $("#image-upload").on("drop", function (e) {
    e.preventDefault();
    $(this).removeClass("dragging");
    // Handle image upload logic here
  });
});
