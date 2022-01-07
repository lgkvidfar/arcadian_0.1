import axios from 'axios';

const baseurl = '/users';

const getAll = async () => {
  const request = await axios.get(baseurl);
  return request.data;
};

export default getAll;