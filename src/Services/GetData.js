import axios from 'axios';
function getData(config) {
  if (config && config.headers) {
    return (
      axios.get(config.url,
        {
          headers:
          {
            [config.headers.key]: config.headers.value
          }
        }
      )
    );
  } return axios.get(config.url);
}
export default getData;

