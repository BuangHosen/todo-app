import './Results.css';

function Results({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}

export default Results;
