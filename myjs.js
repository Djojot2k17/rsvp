let x;
let button = document.getElementById("convert");

button.addEventListener("click", function () {
  x = document.getElementById("input").value;
  console.log("workplx");
  let splitStr = x.split(" ");
  // Set starting speed 100wpm = .6 seconds
  let startSpeed = 600;
  // Need to keep track of time to be able to switch between speeds
  // If time.now >= startSpeed + time.now { show word, time.now = time.now }
  let startTime = Date.now();

  for (let i = 0; i < splitStr.length; i++) {
    console.log(i);
    console.log("startSpeed", startSpeed);
    console.log("startTime", startTime);
    console.log("Date.now()", Date.now());
    if (startSpeed + startTime >= Date.now()) {
      console.log(startTime, startSpeed);
      document.getElementById("output").innerHTML += splitStr[i];
      startTime = Date.now();
    }
  }
});

function fades(paragraph, callback) {
  $(paragraph).fadeIn(100, function () {
    let $next = paragraph.next();
    // console.log($next);
    if ($next.length > 0) {
      fades($next, callback);
    }
  });
}

function startFading(firstDiv) {
  fades(firstDiv, function () {
    startFading(firstDiv);
  });
}

// Get inputs for the Buzz and output the Fizz
function sendInputsToTheBuzz() {
  //  document.getElementById("fizzResult").innerHTML = fizzBuzz(
  //    fizzNum1,
  //    fizzNum2
  //  );
  let fizzNum1 = Number(document.getElementById("fizzNum1").value);
  let fizzNum2 = Number(document.getElementById("fizzNum2").value);
  let fizzString = fizzBuzz(fizzNum1, fizzNum2);
  let result = document.getElementById("fizzResult");
  result.innerHTML = fizzString;
  $("#fizzResult span").hide();
  startFading($("#fizzResult span:first-child"));
}
