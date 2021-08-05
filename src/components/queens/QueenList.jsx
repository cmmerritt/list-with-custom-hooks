import React from 'react';
import { useQueens } from '../../state/queen';
import Queen from './Queen';
import { Link } from 'react-router-dom';

const QueenList = () => {
  const queens = useQueens();

  const queenElements = queens.map((queen) => (
    <li key={queen.id}>
      <Link to={`/${queen.id}`}>
        <Queen {...queen} />
      </Link>
    </li>
  ));

  return <ul>{queenElements}</ul>;
};

export default QueenList;
