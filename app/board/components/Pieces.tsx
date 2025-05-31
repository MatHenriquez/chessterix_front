'use client';
import './pieces.css';
import React, { FC, useRef, useState } from 'react';
import Piece from './Piece';
import { copyPosition, createInitialPosition } from '../helpers/position';

const Pieces: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [currentPosition, setCurrentPosition] = useState<string[][]>(
    createInitialPosition()
  );

  const calculateCoordinates = (
    e: React.MouseEvent<HTMLDivElement>
  ): [number, number] => {
    const { width, left, top } = ref.current?.getBoundingClientRect() || {
      width: 0,
      left: 0,
      top: 0
    };

    const size = width / 8;
    const y = 7 - Math.floor((e.clientY - top) / size);
    const x = Math.floor((e.clientX - left) / size);

    return [y, x];
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const newPosition = copyPosition(currentPosition);
    const [rankIndex, fileIndex] = calculateCoordinates(e);

    const [piece, originalRankStr, originalFileStr] = e.dataTransfer
      .getData('text/plain')
      .split(',');

    const originalRank = Number(originalRankStr);
    const originalFile = Number(originalFileStr);

    newPosition[originalRank][originalFile] = '';
    newPosition[rankIndex][fileIndex] = piece;

    setCurrentPosition(newPosition);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="pieces" ref={ref} onDrop={onDrop} onDragOver={onDragOver}>
      {currentPosition.map((r, rank) =>
        r.map((_, fileIndex) =>
          currentPosition[rank][fileIndex] ? (
            <Piece
              key={`${rank}-${fileIndex}`}
              rank={rank}
              fileIndex={fileIndex}
              piece={currentPosition[rank][fileIndex]}
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
