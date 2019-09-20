import React, {useState, useEffect} from 'react';
import CongressWrapper from '../Molecules/CongressWrapper/CongressWrapper';
import getData from '../Services/GetData';
import Loader from '../Atoms/Loader/Loader';

const DetailedView = () => {
  const [congressData, setCongressData] = useState();

  useEffect(() => {
    const fetchData = () => {
      getData({
        url: 'https://api.propublica.org/congress/v1/115/senate/members.json',
        headers:
          {
            key: 'X-API-Key', value: 'd3ZDrJXu2vkVgADnaCZ79yu6Hfz6081qe0ISmKBh'
          }
      }).then(resp => setCongressData(resp.data));
    };
    fetchData();
  }, []);

  return (
    <div className='page detailed-view'>
      <div className='container'>
        {!congressData ? <Loader /> : <CongressWrapper data={congressData} />}
      </div>
    </div>
  )
}

export default DetailedView;