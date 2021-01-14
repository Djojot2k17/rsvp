let x;
let button = document.getElementById("convert");
let stopButton = document.getElementById("stop");
button.addEventListener("click", function () {
  x = document.getElementById("input").value;
  let splitStr = x.split(" ");
  // Set starting speed 100wpm = .6 seconds
  let startSpeed = 150;
  let i = 0;

  fetch("https://bible-api.com/romans+2")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.text);
      splitStr = data.text.replace(/[\W_]+/g, " ").split(" ");
      let interval = setInterval(() => {
        document.getElementById("output").innerHTML = splitStr[i];
        i++;
        if (i >= splitStr.length) {
          clearInterval(interval);
        }
      }, startSpeed);
      stopButton.addEventListener("click", () => {
        clearInterval(interval);
      });
    });
});
