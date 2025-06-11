import actionTypes from '../actionTypes';

export const makeNewMove = ({ newPosition }: { newPosition: string[][][] }) => {
  return {
    type: actionTypes.NEW_MOVE,
    payload: {
      position: newPosition
    }
  };
};

export const generateCandidateMoves = (candidateMoves: number[][]) => {
  return {
    type: actionTypes.GENERATE_CANDIDATE_MOVES,
    payload: {
      candidateMoves
    }
  };
};

export const clearCandidateMoves = () => {
  return {
    type: actionTypes.CLEAR_CANDIDATE_MOVES,
    payload: {
      candidateMoves: []
    }
  };
}
