import React from 'react';
import { Link } from 'react-router-dom';

function Snack2() {
  return (
    <div>
      <h2>Chips</h2>
      <p>Crunchy potato chips, a classic snack choice.</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Snack2;
