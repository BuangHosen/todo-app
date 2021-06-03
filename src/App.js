import { useCallback, useState } from 'react';

import './App.css';

import Search from './components/Search';
import Results from './components/Results';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleChange = useCallback(
    (event) => {
      if (event.target.value && event.keyCode === 13) {
        event.preventDefault();
        setTasks([...tasks, event.target.value]);
      }
    },
    [tasks]
  );

  const handleRemove = useCallback(
    (item) => {
      const filteredTasks = tasks.filter((_, index) => index !== item);

      setTasks(filteredTasks);
    },
    [tasks]
  );

  return (
    <>
      <h1>
        By failing to <b>prepare</b>, you are preparing to fail
      </h1>
      <Search onChange={handleChange} />
      <Results tasks={tasks} onRemove={handleRemove} />
    </>
  );
}

export default App;
