
export const fetchQueens = async () => {
  const res = await fetch('http://www.nokeynoshade.party/api/queens?limit=10');
  const json = await res.json();
  return json;
};
