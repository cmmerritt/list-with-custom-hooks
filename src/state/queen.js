import { useEffect, useState } from 'react';
import { fetchQueenById, fetchQueens } from '../services/dragQueenApi';

export const useQueens = () => {
  const [queens, setQueens] = useState([]);

  useEffect(() => {
    fetchQueens().then(setQueens);
  }, []);

  return queens;
};

export const useQueen = (id) => {
  const [queen, setQueen] = useState(null);

  useEffect(() => {
    fetchQueenById(id).then(setQueen);
  }, []);
  
  return queen;
};
