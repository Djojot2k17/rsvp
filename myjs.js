let x;
let button = document.getElementById("convert");
let john = document.getElementById("john");
let stopButton = document.getElementById("stop");
let startSpeed = 200;
button.addEventListener("click", function () {
  x = document.getElementById("input").value;
  let splitStr = x.split(" ");
  let i = 0;

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

let fetchedVar;

fetch(`https://bible-api.com/genesis+1`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    fetchedVar = data.text.replace(/[\W_]+/g, " ").split(" ");
    john.addEventListener("click", () => {
      let i = 0;
      let interval = setInterval(() => {
        document.getElementById("output").innerHTML = fetchedVar[i];
        i++;
        if (i >= fetchedVar.length) {
          clearInterval(interval);
        }
      }, startSpeed);

      stopButton.addEventListener("click", () => {
        clearInterval(interval);
      });
    });
  });
