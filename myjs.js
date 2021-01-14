let x;
let button = document.getElementById("convert");
let stopButton = document.getElementById("stop");
button.addEventListener("click", function () {
  x = document.getElementById("input").value;
  console.log("workplx");
  let splitStr = x.split(" ");
  // Set starting speed 100wpm = .6 seconds
  let startSpeed = 200;
  let i = 0;

  let interval = setInterval(() => {
    document.getElementById("output").innerHTML = splitStr[i];
    i++;
    if (i >= splitStr.length) {
      i = 0;
    }
  }, startSpeed);

  stopButton.addEventListener("click", () => {
    clearInterval(interval);
  });
});
