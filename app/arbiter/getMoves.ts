export const getRookMoves = (
  rank: number,
  fileIndex: number,
  currentPosition: string[][],
  piece: string
) => {
  const moves: [number, number][] = [];
  const currentPlayer = piece[0];
  const opponent = currentPlayer === 'w' ? 'b' : 'w';

  const rooksDirections = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];

  rooksDirections.forEach((direction) => {
    for (let i = 1; i < 8; i++) {
      const x = rank + i * direction[0];
      const y = fileIndex + i * direction[1];

      const isOutOfBoard = currentPosition?.[x]?.[y] === undefined;
      if (isOutOfBoard) {
        break;
      }

      if (currentPosition[x][y].startsWith(opponent)) {
        moves.push([x, y]);
        break;
      }

      const isOccupiedByAlly = currentPosition[x][y].startsWith(currentPlayer);

      if (isOccupiedByAlly) {
        break;
      }

      moves.push([x, y]);
    }
  });

  return moves;
};
