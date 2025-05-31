export const createInitialPosition = () => {
  const position = new Array(8).fill('').map(() => new Array(8).fill(''));

  position[0] = ['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr'];
  position[1] = ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'];
  position[6] = ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'];
  position[7] = ['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br'];

  return position;
};

export const copyPosition = (position: string[][]) : string[][] => {
  const newPosition = new Array(8).fill('').map(() => new Array(8).fill(''));

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      newPosition[i][j] = position[i][j];
    }
  }

  return newPosition;
};
