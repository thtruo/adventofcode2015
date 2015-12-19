/**
 * Santa is trying to deliver presents in a large apartment building,
 * but he can't find the right floor - the directions he got are a little
 * confusing. He starts on the ground floor (floor 0) and then follows the
 * instructions one character at a time.
 *
 * An opening parenthesis, (, means he should go up one floor, and a closing p
 * arenthesis, ), means he should go down one floor. The apartment building is
 * very tall, and the basement is very deep; he will never find the top or
 * bottom floors.
 *
 * For example:
 *
 * (()) and ()() both result in floor 0.
 * ((( and (()(()( both result in floor 3.
 * ))((((( also results in floor 3.
 * ()) and ))( both result in floor -1 (the first basement level).
 * ))) and )())()) both result in floor -3.
 *
 * To what floor do the instructions take Santa?
 */


import input from './input';

// const input = '(()(()('; // small input test

let findFloor = (input) => {
  let instructions = input.split('');
  let floor = 0;

  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i] === '(') {
      floor++;
    } else {
      floor--;
    }
  };

  return floor;
};

let position = (input) => {
  let instructions = input.split('');
  let floor = 0;

  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i] === '(') {
      floor++;
    } else {
      floor--;
    }
    if (floor === -1) {
      return i + 1;
    }
  };

  return -1; // error case

};


console.log('Instructions end up at floor', findFloor(input));
console.log('Instructions cause him to first enter the basement at position', position(input));


