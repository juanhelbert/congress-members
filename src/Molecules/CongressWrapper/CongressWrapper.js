import React, {useState} from 'react';
import ListData from '../../Atoms/ListData/ListData';
import './CongressWrapper.scss';

const CongressWrapper = ({data}) => {
  const [filter, setFilter] = useState('');
  const congressMembers = data.results[0].members;
  const lowercasedFilter = filter.toLowerCase();
  const filteredMembers = congressMembers.filter(item => {
    return (
      item.last_name.toLowerCase().includes(lowercasedFilter) || 
      item.first_name.toLowerCase().includes(lowercasedFilter)
    );
  });

  function handleChangeInput(e) {
    setFilter(e.target.value);
  }

  return <div className='congress-wrapper'>
    <input
      value={filter}
      onChange={event => handleChangeInput(event)}
      placeholder='Write your filter'
    />
    <ListData data={filteredMembers} />
  </div>
}

export default CongressWrapper;