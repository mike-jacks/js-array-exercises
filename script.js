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
    document.getElementById("unicorn").innerHTML += "<p>" + `🦄🦄🦄🦄${item}🌈🌈🌈🌈` + "</p>";
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

const testNumberFilter = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8];
  const filteredNumbers = numberFilter(nums);
  console.log(filteredNumbers);
};

const numberFilter = (numbers) => numbers.filter((number) => number >= 0 && number <= 5);

// const numberFilterForEach = (numbers) => {
//   const filtered = [];
//   numbers.forEach((num, index, array) => {
//     if (!num >= 0 && !num <= 5) {
//       array.remove(index);
//     }
//   });
//   return numbers;
// };

// const numberFilter = (numbers) => {
//   result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= 0 && numbers[i] <= 5) {
//       result.push(numbers[i]);
//     }
//   }
//   return result;
// };

// const filter1 = () => {
//   const numbersString = prompt("Give a list of numbers separated by a comma: ");
//   const numbers = numbersString.split(",").map((number) => number.trim());
//   const oddNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//       oddNumbers.push(numbers[i]);
//     }
//   }
//   for (let i = 0; i < oddNumbers.length; i++) {
//     console.log(oddNumbers[i])
//   }
// };

// const filter1 = () => {
//   const numbersString = prompt("Give a list of numbers separated by a comma: ");
//   const numbers = numbersString.split(",").map((number) => Number(number));
//   document.getElementById("filtered-numbers").innerHTML = "";
//   numbers
//     .filter((num) => num % 2 !== 0)
//     .map((num) => {
//       document.getElementById("filtered-numbers").innerHTML += "<li>" + num + "</li>";
//     });
// };

// const filter1 = () => {
//   const numbersString = prompt("Give a list of numbers separated by a comma: ");
//   const numbers = numbersString.split(",").map((number) => Number(number));
//   document.getElementById("filtered-numbers").innerHTML = "";
//   numbers.forEach((num, index, array) => {
//     if (num % 2 !== 0) {
//       document.getElementById("filtered-numbers").innerHTML += `<li>${num}</li>`;
//     }
//   });
// };

const filter1 = () => {
  const numbersString = prompt("Give a list of numbers separated by a comma: ");
  const numbers = numbersString.split(",").map((number) => Number(number));
  document.getElementById("filtered-numbers").innerHTML = "";
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] % 2 !== 0) {
      document.getElementById("filtered-numbers").innerHTML += `<li>${numbers[i]}</li>`;
    }
    i++;
  }
};

const filterModifyArray = () => {
  const numbers = [0, 2, 76, 8, 2, 1, 5, 2, 6, 9, 9, 11, 0, 15, 2, 8, 9];
  filter2(numbers);
  console.log(numbers);
};

const filter2 = (numbers) => {
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] < 8 || numbers[i] > 15) {
      numbers.splice(i, 1);
    }
  }
};

const filter3 = () => {
  const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const odds = numArray.filter((num) => num % 2 !== 0);
  console.log(odds);
};

const reduce1 = () => {
  const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = numArray.reduce((acc, curr) => {
    acc += curr;
    return acc;
  });
  console.log(result);
  return result;
};
