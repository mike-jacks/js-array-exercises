function loop1() {
  let fruits = ["apple", "banana", "cherry"];
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
}

const loop2 = () => {
  const array = [];
  for (let i = 0; i < 3; i++) {
    let item = prompt("What item would you like to add?: ");
    array.push(item);
  }
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  array.map((item) => {
    document.getElementById("unicorn").innerHTML +=
      "<p>" + `🦄🦄🦄🦄${item}🌈🌈🌈🌈` + "</p>";
  });
};

const loop3 = () => {
  let items = prompt("Give me items separated by a comma: ");
  let itemsArray = items.split(",").map((item) => item.trim());
  for (let i = 0; i < itemsArray.length; i++) {
    console.log(itemsArray[i]);
  }
};

// function convertToNumber(str) {
//   return parseInt(str);
// }

const map1 = () => {
  const numString = prompt("Enter comma separated numbers (e.g. 3,1,9):");
  const numArrayAsStrings = numString.split(",");
  const numArray = numArrayAsStrings.map(Math.floor);
  console.log(numArray);
};

// for (let i = 0; i < numArrayAsStrings.length; i++) {
//   numArray.push(Number(numArrayAsStrings[i]));
// }
//

const double = (num) => num * 2;

const map2 = () => {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(double);
  console.log(doubled);
  console.log(typeof numbers.map(double));
  console.log(typeof numbers);
};

const map3 = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const old_numbers = [...numbers];
  numbers.forEach((num, index, array) => {
    if (num % 2 === 0) {
      array[index] = num * 2;
    } else {
      array[index] = num * 3;
    }
  });
  // const converted = numbers.map((num) => {
  //   if (num % 2 == 0) {
  //     return num * 2;
  //   } else {
  //     return num * 3;
  //   }
  // });
  for (let i = 0; i < numbers.length; i++) {
    console.log(`Original: ${old_numbers[i]}, changed: ${numbers[i]}`);
  }
};
