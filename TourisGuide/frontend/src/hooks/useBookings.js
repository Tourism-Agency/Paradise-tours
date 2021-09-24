import { useQuery } from 'react-query';

import api from '../Services/Api';

const useBookings = ({id,status,history}) => {
  const fetchBookings = async () => {
    const query = new URLSearchParams({
      'status': status,
    });

    if (history) {
      query.append('history', 'true');
    }
    try {
      const bookings = await api.get(`bookings/guide/${id}?${query.toString()}`);
     
      const data = await bookings.json();
      return data.bookings;
      
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(['bookings',id,status], fetchBookings, {
    refetchOnWindowFocus: false,
  });
};

export default useBookings;