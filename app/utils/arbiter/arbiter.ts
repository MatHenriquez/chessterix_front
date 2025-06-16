import {
  getBishopMoves,
  getKingMoves,
  getKnightMoves,
  getPawnCaptures,
  getPawnMoves,
  getQueenMoves,
  getRookMoves
} from './getMoves';

const arbiter = {
  getRegularMoves: function (
    rank: number,
    fileIndex: number,
    position: string[][],
    piece: string,
    previousPosition: string[][]
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

    if (piece.endsWith('p')) {
      return [...getPawnMoves(rank, fileIndex, position, piece), ...getPawnCaptures(rank, fileIndex, position, piece, previousPosition)];
    }

    return [];
  }
};

export default arbiter;
