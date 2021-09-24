import { useMutation, useQueryClient } from 'react-query';

import api from '../Services/Api';

const useUpdateBooking = (id) => {
  const QueryClient = useQueryClient();
  const bookingsUrl = `bookings/${id}`;

  return useMutation(
    (obj) =>
    api.put(bookingsUrl, JSON.stringify(obj)).then((data) => data.json()),
    {
      onSuccess: async () => {
        QueryClient.invalidateQueries('success');
      },
    },
    {
      onError: async () => {
        console.log('error');
      },
    }
  );
};

export default useUpdateBooking;
