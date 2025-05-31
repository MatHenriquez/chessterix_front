import { createInitialPosition } from '@/board/helpers/position';
import { turns } from './turns';

export const initGameState = {
  position: [createInitialPosition()],
  turn: turns.WHITE
};
