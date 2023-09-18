import React from 'react';
import { Link } from 'react-router-dom';

function Snack1() {
  return (
    <div>
      <h2>Soda</h2>
      <p>Enjoy a refreshing soda drink.</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Snack1;

