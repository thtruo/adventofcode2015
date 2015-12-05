/**
 * http://adventofcode.com/day/2
 *
 * The elves are running low on wrapping paper, and so they need to submit an
 * order for more. They have a list of the dimensions (length l, width w, and
 * height h) of each present, and only want to order exactly as much as they need.
 *
 * Fortunately, every present is a box (a perfect right rectangular prism),
 * which makes calculating the required wrapping paper for each gift a little
 * easier: find the surface area of the box, which is 2*l*w + 2*w*h + 2*h*l.
 * The elves also need a little extra paper for each present: the area of the
 * smallest side.
 *
 * For example:
 *
 * A present with dimensions 2x3x4 requires 2*6 + 2*12 + 2*8 = 52 square ft of
 * wrapping paper plus 6 square ft of slack, for a total of 58 square ft.
 *
 * A present with dimensions 1x1x10 requires 2*1 + 2*10 + 2*10 = 42 square ft
 * of wrapping paper plus 1 square foot of slack, for a total of 43 square ft.
 *
 * All numbers in the elves' list are in ft. How many total square ft of
 * wrapping paper should they order?
 */

let fs = require('fs');
let presents = fs.readFileSync('input.txt').toString().split('\n');
let totalWrappingPaper = 0;
let totalRibbon = 0;

let totalSurfaceArea = (dim) => {
  let [l, w, h] = dim.split('x').map(Number).sort((a, b) => { return a - b; });
  return (2 * l * w) + (2 * w * h) + (2 * h * l) + (l * w);
};

let totalRibbonLength = (dim) => {
  let [l, w, h] = dim.split('x').map(Number).sort((a, b) => { return a - b; });
  return (l + l + w + w) + (l * w * h);
};

for (let dim of presents) {
  totalWrappingPaper += totalSurfaceArea(dim);
  totalRibbon += totalRibbonLength(dim);
};

console.log('Total Wrapping Paper:', totalWrappingPaper);
console.log('Total Ribbon Length: ', totalRibbon);
