import {
  getBishopMoves,
  getKingMoves,
  getKnightMoves,
  getQueenMoves,
  getRookMoves
} from './getMoves';

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

    if (piece.endsWith('b')) {
      return getBishopMoves(rank, fileIndex, position, piece);
    }

    if (piece.endsWith('q')) {
      return getQueenMoves(rank, fileIndex, position, piece);
    }

    if (piece.endsWith('k')) {
      return getKingMoves(rank, fileIndex, position, piece);
    }

    return [];
  }
};

export default arbiter;
