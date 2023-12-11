/* $(document).ready(function () {
  // Ajax call on page load
  $.ajax({
    url: "http://numbersapi.com/1/30/date?json",
    method: "GET",
    success: function (data) {
      $("#ajax-content").text(data.text);
      console.log(data.text);
      // You can also add the information to some area on the page as specified
    },
    error: function () {
      console.error("Error fetching data from API");
    },
  });

  // Set an initial placeholder image
  $("#image-preview").attr("src", "https://placehold.co/600x400");

  // Image upload functionality
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        // Display the uploaded image preview
        $("#image-preview").attr("src", e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#image-preview").click(function () {
    // Trigger file input click
    $("#imageUpload").click();
  });

  $("#imageUpload").change(function () {
    readURL(this);
    uploadImage();
  });

  function uploadImage() {
    var fileInput = document.getElementById("imageUpload");
    var file = fileInput.files[0];

    var formData = new FormData();
    formData.append("image", file);

    $.ajax({
      url: "http://localhost:5000/api/v1/user/img",
      method: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        console.log("Image uploaded successfully:", response);
        // You can handle the response as needed
      },
      error: function (error) {
        console.error("Error uploading image:", error);
      },
    });
  }

  // Handle user creation
  $("#userCreationForm").submit(function (event) {
    event.preventDefault();

    var userData = {
      email: $("input[name='email']").val(),
      password: $("input[name='password']").val(),
      type: $("input[name='type']").val(),
      active: $("input[name='active']").val(),
    };

    $.ajax({
      url: "http://localhost:5000/api/v1/user/user",
      method: "POST",
      data: JSON.stringify(userData),
      contentType: "application/json",
      success: function (response) {
        console.log("User created successfully:", response);
        // You can handle the response as needed
      },
      error: function (error) {
        console.error("Error creating user:", error);
      },
    });
  });
});

function handleDrop(event) {
  event.preventDefault();
  var file = event.dataTransfer.files[0];
  // Handle the dropped file, e.g., upload to the server
}

function handleDragOver(event) {
  event.preventDefault();
}
 */

$(document).ready(function () {
  // Ajax call on page load
  $.ajax({
    url: "http://numbersapi.com/1/30/date?json",
    method: "GET",
    success: function (data) {
      $("#ajax-content").text(data.text);
      console.log(data.text);
      // You can also add the information to some area on the page as specified
    },
    error: function () {
      console.error("Error fetching data from API");
    },
  });

  // Set an initial placeholder image
  var $imagePreview = $("#image-preview");
  $imagePreview.attr("src", "https://placehold.co/600x400");

  // Image upload functionality
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        // Display the uploaded image preview
        $imagePreview.attr("src", e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  $imagePreview.click(function () {
    // Trigger file input click
    $("#imageUpload").click();
  });

  $("#imageUpload").change(function () {
    readURL(this);
    uploadImage();
  });

  function uploadImage() {
    var fileInput = document.getElementById("imageUpload");
    var file = fileInput.files[0];

    var formData = new FormData();
    formData.append("image", file);

    $.ajax({
      url: "http://localhost:5000/api/v1/user/img",
      method: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        console.log("Image uploaded successfully:", response);

        // Update the image preview after successful upload
        $imagePreview.attr("src", response.imageUrl);
      },
      error: function (error) {
        console.error("Error uploading image:", error);
      },
    });
  }

  // Handle user creation
  $("#userCreationForm").submit(function (event) {
    event.preventDefault();

    var userData = {
      email: $("input[name='email']").val(),
      password: $("input[name='password']").val(),
      type: $("input[name='type']").val(),
      active: $("input[name='active']").val(),
    };

    $.ajax({
      url: "http://localhost:5000/api/v1/user/user",
      method: "POST",
      data: JSON.stringify(userData),
      contentType: "application/json",
      success: function (response) {
        console.log("User created successfully:", response);
        // You can handle the response as needed

        // Optionally, you can update the UI here based on the response
      },
      error: function (error) {
        console.error("Error creating user:", error);
      },
    });
  });
});

function handleDrop(event) {
  event.preventDefault();
  var file = event.dataTransfer.files[0];
  // Handle the dropped file, e.g., upload to the server
}

function handleDragOver(event) {
  event.preventDefault();
}
