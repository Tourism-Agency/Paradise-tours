import { useQuery } from 'react-query';

import api from '../Services/Api';

const useGuides = () => {

  const fetchGuides = async () => {
    try {
      const user = await api.get(`guides`);
     
      const data = await user.json();
      return data.dates;
      
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(['guides-dates'], fetchGuides, {
    refetchOnWindowFocus: false,
  });
};

export default useGuides;