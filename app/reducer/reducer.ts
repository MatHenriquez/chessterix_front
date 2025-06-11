import {
  Action,
  CandidateMovesAction,
  MoveAction,
  State
} from '@/contexts/Context';
import actionTypes from './actionTypes';
import { turns } from '@/constants/turns';

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case actionTypes.NEW_MOVE: {
      let { turn, position } = state;
      turn = turn === turns.WHITE ? turns.BLACK : turns.WHITE;

      position = (action.payload as MoveAction).position;

      return {
        ...state,
        position,
        turn
      };
    }

    case actionTypes.GENERATE_CANDIDATE_MOVES: {
      const { candidateMoves } = action.payload as CandidateMovesAction;
      return {
        ...state,
        candidateMoves
      };
    }

    case actionTypes.CLEAR_CANDIDATE_MOVES: {
      return {
        ...state,
        candidateMoves: []
      };
    }

    default:
      return state;
  }
}

export { reducer };
