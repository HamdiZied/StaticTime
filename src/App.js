import React from 'react';
import './Timer.css';
import Timer from  './Timer';

function App() {
  return (
 
    <div>
       <Timer ms={215478458} />
       <Timer ms={15120000} />
       <Timer ms={6310000} />
  </div>

  );
}

export default App;
