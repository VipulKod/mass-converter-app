let num1 = document.querySelector("#num-1");
let num2 = document.querySelector("#num-2");
const unit1 = document.querySelector("#unit-1");
const unit2 = document.querySelector("#unit-2");
let const1 = 0;
let const2 = 0;

function convert() {
  converter(num1, unit1, unit2);
}

function converter(num1, unit1, unit2) {
  unit1 = unit1.value;
  unit2 = unit2.value;

  for (let i = 0; i < unit.length; i++) {
 
      if (unit1 == unit[i].name) {
        const1 = unit[i].value;
      }
      if (unit2 == unit[i].name) {
        const2 = unit[i].value;
      }

  }

  const1 = parseFloat(const1);
  const2 = parseFloat(const2);
  num1 = parseFloat(num1.value);

  num2.value = (num1 * const2) / const1;
}

let unit = [
  {
    name: "Grams",
    value: "1000",
  },
  {
    name: "Kilogram",
    value: "1",
  },
  {
    name: "Pounds",
    value: "2.20462",
  },
  {
    name: "tonne",
    value: "0.001",
  },
  {
    name: "stone",
    value: "0.157473",
  },
  {
    name: "Ounce",
    value: "35.274",
  },
];