0x00. ES6 Basics
0. Const or let?
Modify

function taskFirst to instantiate variables using const
function taskNext to instantiate variables using let
export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
1. Block Scope
Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.

export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
2. Arrow functions
Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)

export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
3. Parameter defaults
Condense the internals of the following function to 1 line - without changing the name of each function/variable.

Hint: The key here to define default parameter values for the function parameters.

export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
4. Rest parameter syntax for functions
mandatory
Score: 100.0% (Checks completed: 100.0%)
Modify the following function to return the number of arguments passed to it using the rest parameter syntax

export default function returnHowManyArguments() {

}
5. The wonders of spread syntax
sing spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

export default function concatArrays(array1, array2, string) {
}
6. Take advantage of template literals
Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}
7. Object property value shorthand syntax
Notice how the keys and the variable names are the same?

Modify the following function’s budget object to simply use the keyname instead.

export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
8. No need to create empty objects before adding in properties
mandatory
Score: 100.0% (Checks completed: 100.0%)
Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object

function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
9. ES6 method properties
mandatory
Score: 66.67% (Checks completed: 66.67%)
Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object

import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
