export interface State {
  position: string[][][];
  turn: Turn;
}

export type Turn = 'white' | 'black';

import { turns } from '@/constants/turns';
import React from 'react';

export type Action = { type: string; payload: { position: string[][][] } };

export interface ContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const AppContext = React.createContext<ContextType>({
  state: { position: [], turn: turns.WHITE },
  dispatch: () => {}
});

export const useAppContext = () => {
  return React.useContext(AppContext);
};

export default AppContext;
