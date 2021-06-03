import { PencilIcon, TrashIcon } from '@heroicons/react/outline';

import './Results.css';

function Results({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <div className='row'>
          <li key={index}>{task}</li>
          <div>
            <TrashIcon className='icon-1' />
            <PencilIcon className='icon-2' />
          </div>
        </div>
      ))}
    </ul>
  );
}

export default Results;
