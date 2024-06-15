// shortest path [0,0][3,3]
let matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
knightMoves([0, 0], [1, 2]) ==
  [
    [0, 0],
    [1, 2],
  ];
let queue = [];
function shortestPath(start, end) {
  if (start === end) return;

  let g = shortestPath(start + 1, end + 1);
  queue.push(start, end);
  return;
}
function findMoves(start) {
  let move1 = matrix[start[0] - 2][start[0] - 1];
  let move2 = matrix[start[0] + 2][start[0] - 1];
  let move3 = matrix[start[0] - 2][start[0] + 1];
  let move4 = matrix[start[0] + 2][start[0] + 1];
  let move5 = matrix[start[0] - 2][start[0] - 1];
}
// start=end return
// find all avaiable moves and put them in a queue
// find all avaiable moves of all the previous avaiable moves
// return array
