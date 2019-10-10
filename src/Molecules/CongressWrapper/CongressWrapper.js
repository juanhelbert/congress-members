import React, {useState} from 'react';
import ListMembers from '../../Atoms/ListMembers/ListMembers';
import ToTopArrow from '../../Atoms/ToTopArrow/ToTopArrow';
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
    <ListMembers data={filteredMembers} />
    <p className='copyright'>
      <a href='https://projects.propublica.org/api-docs/congress-api/' target='_blank' rel="noopener noreferrer">
        {data.copyright}
      </a>
    </p>
    <ToTopArrow />
  </div>
}

export default CongressWrapper;