function countRoads(number) {
  let count = 0;
  let num = number / 2;
  if (number % 2 === 0) {
    count = (num + 1) * (num + 1);
  } else {
    num = Math.ceil(num);
    count = num * (num + 1);
  }
  console.log(count);
}

countRoads(3);
