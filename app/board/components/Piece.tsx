import React, { FC, DragEvent } from 'react';

type PieceProps = {
  piece: string;
  fileIndex: number;
  rank: number;
};

const Piece: FC<PieceProps> = ({ piece, fileIndex, rank }) => {
  const onDragStart = (e: DragEvent) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', `${piece},${rank},${fileIndex}`);
    setTimeout(() => {
      (e.target as HTMLDivElement).style.display = 'none';
    }, 0);
  };

  const onDragEnd = (e: DragEvent) => {
    (e.target as HTMLDivElement).style.display = 'block';
  };

  return (
    <div
      className={`piece ${piece} p-${fileIndex}${rank}`}
      draggable={true}
      onDragStart={(e) => onDragStart(e)}
      onDragEnd={(e) => onDragEnd(e)}
    ></div>
  );
};

export default Piece;
