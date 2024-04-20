function submitForm() {
    var form = document.getElementById("predict-form");
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/predict");
    xhr.onload = function() {
      if (xhr.status === 200) {
        var resultDiv = document.getElementById("result");

        // We will receive object as a string, so we need to parse it to JSON
        var objectReceived = JSON.parse(xhr.responseText);

        var answer = objectReceived.answer;
        var answer_type = objectReceived.answer_type;
        var answerability = 1 - objectReceived.answerability;
        
        resultDiv.innerHTML = "<p>Answer: <span style='color:#22a224'>" + answer + "</span></p>" +
        "<p>Answer type: <span style='color:#22a224'>" + answer_type + "</span></p>" +
        "<p>Answerable: <span style='color:#22a224'>" + answerability + "</span></p>" ;
        } else {
        alert("An error occurred while trying to predict the answer.");
      }
    };
    xhr.send(formData);
  }
  document.getElementById('image').onchange = function (e) {
    var imagePreview = document.getElementById('image-preview');
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
        var img = new Image();
        img.src = event.target.result;
        img.style.maxWidth = '300px'; // You can adjust the maximum width of the displayed image
        imagePreview.innerHTML = ''; // Clear previous image if any
        imagePreview.appendChild(img);
    };

    reader.readAsDataURL(file);
};