import { getRookMoves } from './getMoves';

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
    return [];
  }
};

export default arbiter;
