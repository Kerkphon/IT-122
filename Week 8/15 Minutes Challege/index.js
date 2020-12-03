function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  if (sum > 0) {
    return sum;
  } else {
    console.log("Total must be greater than 1 ");
  }
}

console.log(sumTo(0));
