import React, { FC } from 'react';

type PieceProps = {
  piece: string;
  fileIndex: number;
  rank: number;
};

const Piece: FC<PieceProps> = ({ piece, fileIndex, rank }) => {
  return (
    <div
      className={`piece ${piece} p-${fileIndex}${rank}`}
      draggable={true}
    ></div>
  );
};

export default Piece;
