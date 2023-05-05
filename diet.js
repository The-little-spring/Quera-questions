function diet(str) {
  let msg = "rahat baash";
  const srtArr = str.split("");
  const red = srtArr.filter((char) => char === "R");
  const yellow = srtArr.filter((char) => char === "Y");
  if (
    red.length >= 3 ||
    (red.length >= 2 && yellow.length >= 2) ||
    yellow.length + red.length === 5
  ) {
    msg = "nakhor lite";
  }
  console.log(msg);
}

function checkHealthLabel(input) {
  let redCount = 0;
  let yellowCount = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "R") {
      redCount++;
    } else if (input[i] === "Y") {
      yellowCount++;
    }
  }

  if (
    redCount >= 3 ||
    (redCount >= 2 && yellowCount >= 2) ||
    redCount + yellowCount === input.length
  ) {
    console.log("nakhor lite");
  } else {
    console.log("rahat baash");
  }
}
