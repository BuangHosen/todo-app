import { useCallback, useState } from 'react';

import './Search.css';

function Search({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (value) {
        onSubmit(value);
        setValue('');
      }
    },
    [onSubmit, value]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={value} />
    </form>
  );
}

export default Search;
