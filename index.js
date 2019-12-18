let Chess = require('chess.js').Chess;
let chess = new Chess();

while(!chess.game_over()) {
  let moves = chess
    .moves()
    .filter(m => m !== 'O-O')
    .filter(m => m !== 'O-O-O');
  let move = moves[Math.floor(Math.random() * moves.length)];
  chess.move(move);
}
console.log(chess.pgn());