"use strict";

//-------
for (i = 5; i <= 10; i++) {
  console.log(i);
}
//-------
for (i = 20; i >= 10; i--) {
  if (i == 13) {
    break;
  }
  console.log(i);
}
//--------
for (i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
//--------
let i = 2;
while (i <= 16) {
  if (i % 2 === 0) {
    i++;
    continue;
  } else {
    console.log(i);
  }
  i++;
}
//-------
let arrp = [];
let a = 0;
for (let i = 5; i <= 10; i++) {
  arr[a] = i;
  a++;
}
console.log(arr);
//------
const arr = [3, 5, 8, 16, 20, 23, 50];
const resultt = [];
for (let i = 0; i < arr.length; i++) {
  result[i] = arr[i];
}
console.log(arr);
console.log(result);
//-------
const data = [5, 10, "Shopping", 20, "Homework"];
for (let i = 0; i < data.length; i++) {
  if (typeof data[i] === "string") {
    data[i] = `${data[i]} - done`;
  } else if (typeof (data[i] == "number")) {
    data[i] = data[i] * 2;
  }
}
console.log(result);
//--------
let resulttt = [];
data = [5, 10, "Shopping", 20, "Homework"];
for (let i = 0; i < data.length; i++) {
  result[i] = data[data.length - 1 - i];
}
console.log(data);
console.log(result);
//-------
const lines = 5;
let result = "";

for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    result += " ";
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);
//-------
function Hello(name) {
  console.log(`Hello, ${name}`);
}
//-------
function Numberr(num) {
  let arr = [];
  arr[0] = num - 1;
  arr[1] = num;
  arr[2] = num + 1;
  return arr;
}
console.log(Numberr(3));
//-------
function getMath(num, rep) {
  let str = "";
  if (typeof rep != "number" || rep <= 0) {
    return num;
  } else {
    for (i = 1; i <= rep; i++) {
      if (i === rep) {
        str += num * i;
      } else str += num * i + "---";
    }
  }
  return str;
}
console.log(getMath(10, -5));
//-------
function calculateVolumeAndArea(a) {
  if (a == "" || typeof a != "number" || a <= 0 || a % 1 !== 0) {
    return "При вычислении произошла ошибка";
  } else {
    let S = 6 * Math.pow(a, 2);
    let V = Math.pow(a, 3);
    return `Объем куба: ${V}, площадь всей поверхности: ${S}`;
  }
}
console.log(calculateVolumeAndArea(5.5));
//-------
function getCoupeNumber() {
  let train = { coupe: {} };
  let number = 1;
  let arr = [];
  for (let i = 1; i <= 9; i++) {
    arr = [];
    for (let j = 0; j < 4; j++) {
      arr[j] = number;
      number++;
    }
    train.coupe[`Coupe ${i}`] = arr;
  }
  console.log(train);
}
getCoupeNumber();
//-------
function getTimeFromMinutes(minutesTotal) {
  if (
    typeof minutesTotal !== "number" ||
    minutesTotal < 0 ||
    !Number.isInteger(minutesTotal)
  ) {
    return console.log("Ошибка, проверьте данные");
  }

  const hours = Math.floor(minutesTotal / 60);
  const minutes = minutesTotal % 60;

  let hoursStr = "";

  switch (hours) {
    case 0:
      hoursStr = "часов";
      break;
    case 1:
      hoursStr = "час";
      break;
    case 2:
    case 3:
    case 4:
      hoursStr = "часа";
      break;
    default:
      hoursStr = "часов";
  }

  return console.log(`Это ${hours} ${hoursStr} и ${minutes} минут`);
}
getTimeFromMinutes(185);
//-------
function findMaxNumber(a, b, c, d) {
  let arr = [a, b, c, d];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "number" || arr[i] == null) {
      return console.log(0);
    }
  }
  console.log(Math.max(...arr));
}
findMaxNumber(1, 5, "6", "10");
//-------
const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
  showAgeAndLangs(personalPlanPeter) {
    const { age } = personalPlanPeter;
    const { languages } = personalPlanPeter.skills;
    let str = `Мне ${age} и я владею языками:`;
    languages.forEach(function (lang) {
      str += ` ${lang.toUpperCase()}`;
    });

    return console.log(str);
  },
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);
//-------
function showExperience(personalPlanPeter) {
  const { exp } = personalPlanPeter.skills;
  return console.log(exp);
}
showExperience(personalPlanPeter);
//-------
function showProgrammingLangs(personalPlanPeter) {
  let str = "";
  for (let key in personalPlanPeter.skills.programmingLangs) {
    str += `Язык ${key} изучен на ${personalPlanPeter.skills.programmingLangs[key]}\n`;
  }
  return console.log(str);
}
showProgrammingLangs(personalPlanPeter);
//-------
const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  let str = "";
  if (arr.length > 0) {
    str += "Семья состоит из:";
    for (let i = 0; i < arr.length; i++) {
      str += ` ${arr[i]}`;
    }
  } else {
    str += "Семья пуста";
  }
  return str;
}
showFamily(family);
//-------
const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  arr.forEach((city) => {
    console.log(city.toLowerCase());
  });
}
standardizeStrings(favoriteCities);
//-------
const someString = "This is some strange string";

function reverse(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += `${str[i]}`;
  }
  return console.log(`${str}\n${rev}`);
}
reverse(someString);
//-------
const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
  let str = "";
  arr.length === 0
    ? (str = "Нет доступных валют")
    : (str = "Доступные валюты:\n");

  arr.forEach(function (curr, i) {
    if (curr !== missingCurr) {
      str += `${curr}\n`;
    }
  });

  return console.log(str);
}
availableCurr([...baseCurrencies, ...additionalCurrencies], "RUB");
//-------

const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough(data) {
  let square = 0;
  let volume = 0;
  data.shops.forEach((shops) => {
    square = shops.width * shops.length;
  });
  volume = square * data.height;

  return  data.budget >= (volume * data.moneyPer1m3)?'Бюджета достаточно':'Бюджета недостаточно';

}
isBudgetEnough(shoppingMallData)
