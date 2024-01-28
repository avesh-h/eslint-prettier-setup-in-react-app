import { useState } from 'react';

import './App.css';
import Check from 'components/Check';

function App() {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <div className="App">
      sdjbfshjbdf
      <div>
        <Check isCheck={isCheck} setIsCheck={setIsCheck} />
      </div>
    </div>
  );
}

export default App;
