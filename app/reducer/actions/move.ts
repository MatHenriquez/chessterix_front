import actionTypes from "../actionTypes";

export const makeNewMove = ({ newPosition }: { newPosition: string[][][] }) => {
  return {
    type: actionTypes.NEW_MOVE,
    payload: {
      position: newPosition 
    }
  };
};
