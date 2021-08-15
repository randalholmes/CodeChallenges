// fizzbuzz.js

function fizzbuzz01() {
  for (let i =1; i<100; ++i) {
    if (i%5==0 && i%3==0) {
      console.log("FizzBuzz");
    } else if (i%3==0) {
      console.log("Fizz");
    } else if (i%5==0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function fizzbuzz02() {
  for (let i=1; i<100; ++i) {
    let fizz = i%3==0 ? "Fizz" : "";
    let buzz = i%5==0 ? "Buzz" : "";
    console.log((fizz + buzz).length > 0 ? fizz + buzz : i);
  }
}

function fizzbuzz03() {
  let three = 0;
  let five = 0;
  let fizz, buzz;
  for (let i=1; i<100; ++i) {

    ++three;
    if (three == 3) {
      fizz = "Fizz";
      three = 0;
    } else {
      fizz = "";
    }

    ++five;
    if (five == 5) {
      buzz = "Buzz";
      five = 0;
    } else {
      buzz = "";
    }

    console.log((fizz.length + buzz.length) > 0 ? fizz + buzz : i);
  }
}

function fizzbuzz04() {
  let three = 0;
  let five = 0;
  for (let i=1; i<100; ++i) {
    ++three;
    ++five;
    if (five==5 && three==3) {
      console.log("FizzBuzz");
      three = 0;
      five = 0;
    } else if (three==3) {
      console.log("Fizz");
      three = 0;
    } else if (five==5) {
      console.log("Buzz");
      five = 0;
    } else {
      console.log(i);
    }
  }
}

//fizzbuzz01();
//fizzbuzz02();
//fizzbuzz03();
fizzbuzz04();
