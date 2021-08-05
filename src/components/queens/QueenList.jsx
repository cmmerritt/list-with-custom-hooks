import React from 'react';
import { useQueens } from '../../state/queen';
import Queen from './Queen';

const QueenList = () => {
  const queens = useQueens();

  const queenElements = queens.map((queen) => (
    <li key={queen.id}>
      <Queen {...queen} />
    </li>
  ));

  return <ul>{queenElements}</ul>;
};

export default QueenList;
