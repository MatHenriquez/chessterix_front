import { getKnightMoves, getRookMoves } from './getMoves';

const arbiter = {
  getRegularMoves: function (
    rank: number,
    fileIndex: number,
    position: string[][],
    piece: string
  ) {
    if (piece.endsWith('r')) {
      return getRookMoves(rank, fileIndex, position, piece);
    }

    if (piece.endsWith('n')) {
      return getKnightMoves(rank, fileIndex, position);
    }

    return [];
  }
};

export default arbiter;
