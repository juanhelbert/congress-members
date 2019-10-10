import React from 'react';
import './ListMembers.scss';

const ListMembers = ({data}) => {
  const listedData = data.map(item =>
    <li key={item.id} className={`id-${item.id}`}>
      <p className='title'>
        {item.last_name} {item.first_name}
      </p>
      <p>
        {item.facebook_account
          ? <span><a href={`https://www.facebook.com/${item.facebook_account}`} target='_blank' rel="noopener noreferrer">
              <i className='facebook'/> /{item.facebook_account}
            </a></span>
          : ''}
        {item.twitter_account
          ? <span><a href={`https://twitter.com/${item.twitter_account}`} target='_blank' rel="noopener noreferrer">
              <i className='twitter'/> /{item.twitter_account}
            </a></span>
          : ''}
        {item.contact_form
          ? <span><a href={item.contact_form} target='_blank' rel="noopener noreferrer">
              <i className='contact'/> Contact
            </a></span>
          : ''}
      </p>
    </li>
  );
  return <div className='list-data'>
    <ul>
      {listedData}
    </ul>
  </div>
}

export default ListMembers;