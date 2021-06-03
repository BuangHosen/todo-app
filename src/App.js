import { useCallback, useState } from 'react';

import './App.css';

import Search from './components/Search';
import Results from './components/Results';

function App() {
  const [value, setValue] = useState([]);

  const handleChange = useCallback(
    (event) => {
      if (event.target.value && event.keyCode === 13) {
        event.preventDefault();
        setValue([...value, event.target.value]);
      }
    },
    [value]
  );

  return (
    <>
      <h1>
        By failing to <b>prepare</b>, you are preparing to fail
      </h1>
      <Search onChange={handleChange} />
      <Results tasks={value} />
    </>
  );
}

export default App;
