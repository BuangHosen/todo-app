import './Search.css';

function Search({ onChange }) {
  return (
    <div>
      <input onKeyUpCapture={onChange} />
    </div>
  );
}

export default Search;
