import { PencilIcon, TrashIcon } from '@heroicons/react/outline';

import './Results.css';

function Results({ tasks, onRemove }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <div key={index} className='row'>
          <li>{task}</li>
          <div>
            <TrashIcon className='icon-1' onClick={() => onRemove(index)} />
            <PencilIcon className='icon-2' />
          </div>
        </div>
      ))}
    </ul>
  );
}

export default Results;
