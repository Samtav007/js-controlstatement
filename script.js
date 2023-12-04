// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}


// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
let oddNumber = 1;

while (oddNumber <= 100) {
  console.log(oddNumber);
  oddNumber += 2;
}


// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
let multipleOfThree = 3;

do {
  console.log(multipleOfThree);
  multipleOfThree += 3;
} while (multipleOfThree <= 100);


// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.
for (let number = 2; number <= 100; number++) {
  let isPrime = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(number);
  }
}


