'use client';
import '../styles/pieces.css';
import React, { FC, useRef } from 'react';
import Piece from './Piece';
import { copyPosition } from '../helpers/position';
import { useAppContext } from '@/contexts/Context';
import { clearCandidateMoves, makeNewMove } from '@/reducer/actions/move';

const Pieces: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { state, dispatch } = useAppContext();

  const currentPosition = state.position[state.position.length - 1];

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
      .getData('text')
      .split(',');

    const originalRank = Number(originalRankStr);
    const originalFile = Number(originalFileStr);

    const isValidMove = state.candidateMoves?.find(
      (m) => m[0] === rankIndex && m[1] === fileIndex
    );

    if (isValidMove) {
      const wasEnPassantCapture =
        piece.endsWith('p') &&
        Math.abs(fileIndex - originalFile) === 1 &&
        Math.abs(rankIndex - originalRank) === 1 &&
        !newPosition[rankIndex][fileIndex];

      if (wasEnPassantCapture) {
        newPosition[originalRank][fileIndex] = '';
      }

      newPosition[originalRank][originalFile] = '';
      newPosition[rankIndex][fileIndex] = piece;

      dispatch(makeNewMove({ newPosition: [newPosition] }));
    }

    dispatch(clearCandidateMoves());
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const renderRow = (row: string[], rank: number) => {
    return row.map((piece, fileIndex) =>
      piece ? (
        <Piece
          key={`${rank}-${fileIndex}`}
          rank={rank}
          fileIndex={fileIndex}
          piece={piece}
        />
      ) : null
    );
  };

  return (
    <div className="pieces" ref={ref} onDrop={onDrop} onDragOver={onDragOver}>
      {currentPosition.map((row, rank) => renderRow(row, rank))}
    </div>
  );
};

export default Pieces;
