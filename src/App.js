import { useCallback, useState } from 'react';

import './App.css';

import Search from './components/Search';
import Results from './components/Results';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = useCallback(
    (value) => {
      setTasks([...tasks, value]);
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

  const handleUpdate = useCallback(() => {
    console.log('sd');
  }, []);

  return (
    <>
      <h1>
        By failing to <b>prepare</b>, you are preparing to fail
      </h1>
      <Search onSubmit={handleSubmit} />
      <Results tasks={tasks} onRemove={handleRemove} onUpdate={handleUpdate} />
    </>
  );
}

export default App;
