import { Action, State } from '@/contexts/Context';
import actionTypes from './actionTypes';
import { turns } from '@/constants/turns';

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case actionTypes.NEW_MOVE: {
      let { turn, position } = state;
      turn = turn === turns.WHITE ? turns.BLACK : turns.WHITE;

      position = [...position, ...action.payload.position];

      return {
        ...state,
        position,
        turn
      };
    }
    default:
      return state;
  }
}

export { reducer };
