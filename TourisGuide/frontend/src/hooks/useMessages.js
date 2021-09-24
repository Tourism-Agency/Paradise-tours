import { useQuery } from 'react-query';

import api from '../Services/Api';

const useMessages = ({id}) => {
  const query = new URLSearchParams({
    'guideId': id,
  });

  const fetchMessages = async () => {
    try {
      const user = await api.get(`messages/guide?${query.toString()}`);
     
      const data = await user.json();
      return data.messages;
      
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(['messages',id], fetchMessages, {
    refetchOnWindowFocus: false,
  });
};

export default useMessages;