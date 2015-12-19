/**
 * Santa is delivering presents to an infinite two-dimensional grid of houses.
 * He begins by delivering a present to the house at his starting location, and
 * then an elf at the North Pole calls him via radio and tells him where to move
 * next. Moves are always exactly one house to the north (^), south (v),
 * east (>), or west (<). After each move, he delivers another present to the
 * house at his new location.
 *
 * However, the elf back at the north pole has had a little too much eggnog, and
 * so his directions are a little off, and Santa ends up visiting some houses
 * more than once. How many houses receive at least one present?
 *
 * For example:
 *
 * > delivers presents to 2 houses: one at the starting location, and one to
 * the east.
 *
 * ^>v< delivers presents to 4 houses in a square, including twice to the house
 * at his starting/ending location.
 *
 * ^v^v^v^v^v delivers a bunch of presents to some very lucky children at only
 * 2 houses.
 */

import {test00, test01, test02, test03, test04, input} from './input'

let prev = { x: 0, y: 0 };  // home coordinates at origin (0, 0)

// Collect all the Cartesian coordinates from parsing the input string
let collectPoints = (input) => {

  let instructions = input.split('');
  let points = [];

  for (var i = 0; i < instructions.length; i++) {

    if (instructions[i] === '<') {
      points.push(new Object({ x: prev.x - 1, y: prev.y }));
      prev.x -= 1;
    }
    else if (instructions[i] === '>') {
      points.push(new Object({ x: prev.x + 1, y: prev.y }));
      prev.x += 1;
    }
    else if (instructions[i] === 'v') {
      points.push(new Object({ x: prev.x, y: prev.y - 1 }));
      prev.y -= 1;
    }
    else if (instructions[i] === '^') {
      points.push(new Object({ x: prev.x, y: prev.y + 1 }));
      prev.y += 1;
    };
  };

  return points;
};

// Count de-duplicated unique coordinates
let countOfUniquePoints = (input) => {

  let points = collectPoints(input);
  let count = 1;

  for (let i = 0; i < points.length; i++) {
    for (let j = i; j < points.length; j++) {

      if (points[i].x === points[j].x && points[i].y === points[j].y) {
        continue;
      }
    }
    count++;
  }
  return count;
}

console.log(countOfUniquePoints(input));