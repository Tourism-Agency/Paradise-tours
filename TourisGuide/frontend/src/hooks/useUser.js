import { useQuery } from 'react-query';

import api from '../Services/Api';

const useUser = ({id}) => {
  const fetchUser = async () => {
    try {
      const user = await api.get(`users/${id}`);
     
      const data = await user.json();
      return data.user;
      
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(['user',id], fetchUser, {
    refetchOnWindowFocus: false,
  });
};

export default useUser;