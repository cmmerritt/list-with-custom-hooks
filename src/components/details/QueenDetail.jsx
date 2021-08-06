import React from 'react';
import { useQueen } from '../../state/queen';
import { useParams } from 'react-router-dom';

const QueenDetail = () => {
  const { id } = useParams();
  const queen = useQueen(id);
  if(!queen) return <h1>Loading...</h1>;

  return (
    <section>
      <h2>Queen Details</h2>
      <dl>
        <dt>Name</dt>
        <dd>{queen.name}</dd>

        <dt>Image</dt>
        <dd>
          <img src={queen.image} alt={queen.name} />
        </dd>

        <dt>Words of Wisdom: </dt>
        <dd>{queen.quote}</dd>
      </dl>
    </section>
  );
};

export default QueenDetail;
