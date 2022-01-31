// Задание 1
// Вывод чисел от 25 до 0 (порядок уменьшения)

function numberCycle() {
  for (let i = 25; i >= 0; i--) {
    console.log(i);
  }
}
//-----------------------
function numberCycle2() {
  let i = 25;
  while (i >= 0) {
    console.log(i--);
  }
}

//---------------------
function numberCycle3() {
  let i = 25;
  do {
    console.log(i--);
  } while (i >= 0);
}

// Задание 2
// Вывод чисел от 10 до 50, которые кратны 5

function oddNumber1() {
  for (let i = 10; i <= 50; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}

//-------------------------
function oddNumber2() {
  let i = 10;
  while (i <= 50) {
    if (i % 5 === 0) {
      console.log(i);
    }
    i++;
  }
}

//---------------------------
function oddNumber3() {
  let i = 10;
  do {
    if (i % 5 === 0) {
      console.log(i);
    }
    i++;
  } while (i <= 50);
}

// Задание 3
// Найти сумму чисел в пределах от 1 до 100.

function sumNumber1() {
  let result = 0;
  for (let i = 0; i <= 100; i++) {
    result += i;
  }
  return result;
}

//-------------------------------
function sumNumber2() {
  let i = 0;
  let result = 0;
  while (i <= 100) {
    result += i;
    i++;
  }
  return result;
}

//--------------------------------------
function sumNumber3() {
  let i = 0;
  let result = 0;
  do {
    result += i;
    i++;
  } while (i <= 100);
  return result;
}
// Задание 4
// предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит

function exampleSolution1() {
  for (let i = 0; i < 1; ) {
    let example = +prompt("Реши пример 2 + 2 * 2");
    // if (example === 8) {
    //   console.log("Умничка, ответ 8");
    //   ++i;
    // } else {
    //   console.log("Думай давай, бездарь");
    // }
    example === 8
      ? (console.log("Умничка, ответ 8"), ++i)
      : console.log("Думай давай, бездарь");
  }
}

function exampleSolution2() {
  let i = 0;
  while (i < 1) {
    let example = +prompt("Реши пример 2 + 2 * 2");
    if (example === 8) {
      console.log("Умничка, ответ 8");
      ++i;
    } else {
      console.log("Думай давай, бездарь");
    }
  }
}
function exampleSolution3() {
  let i = 0;
  do {
    let example = +prompt("Реши пример 2 + 2 * 2");
    if (example === 8) {
      console.log("Умничка, ответ 8");
      ++i;
    } else {
      console.log("Думай давай, бездарь");
    }
  } while (i < 1);
}
