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
    const fizz = i%3==0 ? "Fizz" : "";
    const buzz = i%5==0 ? "Buzz" : "";
    console.log((fizz + buzz).length > 0 ? fizz + buzz : i);
  }
}


function fizzbuzz05() {
  for (let i=f=b=1, fizz, buzz; i<101; ++i) {
    [fizz, f] = f==3 ? ["Fizz", 1] : ["", ++f];
    [buzz, b] = b==5 ? ["Buzz", 1] : ["", ++b];
    console.log((fizz + buzz).length > 0 ? fizz + buzz : i);
  }
}


function* range(start=1, end=10) {
  ++end
  for (let i=start; i<end; ++i) {
    yield i
  }
}


function fizz(num) {
  return num%3==0 ? "Fizz" : "";
}


function buzz(num) {
  return num%5==0 ? "Buzz" : "";
}

function fizzbuzz06() {
  for (const num of range(1,100)) {
    const fizzBuzz = fizz(num) + buzz(num);
    console.log(fizzBuzz.length ? fizzBuzz : num)
  }
}

function fizzbuzz07() {
  Array.from(range(1,100)).forEach(num => {
    const fizzBuzz = fizz(num) + buzz(num);
    console.log(fizzBuzz.length ? fizzBuzz : num)
  })
}

function fizzbuzz08() {
  Array.from(range(1,100), num => [fizz(num) + buzz(num), num]).forEach(([fb, num]) => console.log(fb.length ? fb : num))
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

    console.log((fizz + buzz).length > 0 ? fizz + buzz : i);
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



// fizzbuzz01();
// fizzbuzz02();
// fizzbuzz03();
// fizzbuzz04();
// fizzbuzz05();
// fizzbuzz06();
// fizzbuzz07();
fizzbuzz08();


// a()()();

function a() {
  return function () {
    return function () {
      console.log("hello")
    }
  }
}




