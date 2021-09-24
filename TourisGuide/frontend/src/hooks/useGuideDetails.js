import { useQuery } from 'react-query';

import api from '../Services/Api';

const useGuideDetails = () => {

  const fetchGuideDetails = async () => {
    try {
      const user = await api.get(`guide-detail`);
     
      const data = await user.json();
      return data.skills;
      
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(['guides-datails'], fetchGuideDetails, {
    refetchOnWindowFocus: false,
  });
};

export default useGuideDetails;