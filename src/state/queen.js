import { useEffect, useState } from 'react';
import { fetchQueenById, fetchQueens } from '../services/dragQueenApi';

export const useQueens = () => {
  const [loading, setLoading] = useState(true);
  const [queens, setQueens] = useState([]);

  useEffect(() => {
    fetchQueens()
      .then(setQueens)
      .finally(() => setLoading(false));
  }, []);

  return { queens, loading };
};

export const useQueen = (id) => {
  const [queen, setQueen] = useState(null);

  useEffect(() => {
    fetchQueenById(id).then(setQueen);
  }, []);

  return queen;
};
