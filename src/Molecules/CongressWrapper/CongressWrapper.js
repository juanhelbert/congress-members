import React, {useState, useEffect} from 'react';
import ListData from '../../Atoms/ListData/ListData';

const CongressWrapper = ({data}) => {
  const [filter, setFilter] = useState('');
  const congressMembers = data.results[0].members;

  const lowercasedFilter = filter.toLowerCase();
  const filteredData = congressMembers.filter(item =>
    Object.keys(item).some(key =>
      item[key].toLowerCase().includes(lowercasedFilter)
    )
  );

  function handleChangeInput(e) {
    setFilter(e.target.value);
  }

  return <div className="congress-wrapper">
    <input
      value={filter}
      onChange={event => handleChangeInput(event)}
      placeholder='Write a filter'
    />
    <ListData data={data} />
  </div>
}

export default CongressWrapper;