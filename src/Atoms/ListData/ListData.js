import React from 'react';
import './ListData.scss';

const ListData = ({data}) => {
  const listedData = data.results[0].members.map(item =>
    <li key={item.id}>
      {item.title} {item.first_name} {item.last_name}
    </li>
  );
  return <div className="list-data">
    {listedData}
  </div>
}

export default ListData;