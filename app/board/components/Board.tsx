import React from 'react';
import './board.css';
import { getFileCharacters } from '../helpers/get-file-characters';
import Ranks from './Ranks';
import Files from './Files';

const Board = () => {
  const ROWS_AND_COLUMNS_NUMBER = 8;

  const ranks = Array(ROWS_AND_COLUMNS_NUMBER)
    .fill(0)
    .map((_, index: number) => ROWS_AND_COLUMNS_NUMBER - index);

  const files = Array(ROWS_AND_COLUMNS_NUMBER)
    .fill(0)
    .map((_, index: number) => getFileCharacters(index));

  const getClassName = (i: number, j: number) => {
    let className = 'tile';
    className += (i + j) % 2 === 0 ? ' tile--light' : ' tile--dark';
    return className;
  };

  return (
    <div className="board">
      <Ranks ranks={ranks} />
      <div className="tiles">
        {ranks.map((rank, i) => (
          <div key={rank} className="rank">
            {files.map((file, j) => (
              <div key={file + '-' + rank} className={getClassName(i, j)}></div>
            ))}
          </div>
        ))}
      </div>
      <Files files={files} />
    </div>
  );
};

export default Board;
