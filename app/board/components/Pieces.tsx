import './pieces.css';
import React, { FC } from 'react';
import Piece from './Piece';

const Pieces: FC = () => {
  let position = new Array(8).fill('').map(() => new Array(8).fill(''));

  position = [
    ['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr'],
    ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
    ['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br']
  ];

  return (
    <div className="pieces">
      {position.map((r, rank) =>
        r.map((_, fileIndex) =>
          position[rank][fileIndex] ? (
            <Piece
              key={`${rank}-${fileIndex}`}
              rank={rank}
              fileIndex={fileIndex}
              piece={position[rank][fileIndex]}
            />
          ) : (
            <></>
          )
        )
      )}
    </div>
  );
};

export default Pieces;
