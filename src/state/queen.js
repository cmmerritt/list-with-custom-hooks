import { useEffect, useState } from 'react';
import { fetchQueens } from '../services/dragQueenApi';

export const useQueens = () => {
  const [queens, setQueens] = useState([]);

  useEffect(() => {
    fetchQueens().then(setQueens);
  }, []);

  return queens;
};
