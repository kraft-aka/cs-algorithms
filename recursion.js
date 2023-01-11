// function draw(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i + 1; j++) {
//       console.log("#");
//     }
//     console.log("\n");
//   }
// }

function draw(n) {
  if (n <= 0) {
    return;
  }
  draw(n - 1);

  for (let i = 0; i < n; i++) {
    console.log("#");
  }
  console.log("\n");
}

draw(10);
