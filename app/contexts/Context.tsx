'use client';

export interface State {
  position: string[][][];
  turn: Turn;
  candidateMoves?: number[][];
}

export type Turn = 'white' | 'black';

import { turns } from '@/constants/turns';
import React from 'react';

export type MoveAction = {
  position: string[][][];
};

export type CandidateMovesAction = { candidateMoves: number[][] };

export type Action = {
  type: string;
  payload: MoveAction | CandidateMovesAction;
};

export interface ContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const AppContext = React.createContext<ContextType>({
  state: { position: [], turn: turns.WHITE, candidateMoves: [] },
  dispatch: () => {}
});

export const useAppContext = () => {
  return React.useContext(AppContext);
};

export default AppContext;
