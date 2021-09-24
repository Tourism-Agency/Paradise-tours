import { useMutation, useQueryClient } from 'react-query';

import api from '../Services/Api';

const useCreateBooking = () => {
  const QueryClient = useQueryClient();
  const messagesUrl = `messages`;

  return useMutation(
    (obj) =>
    api.post(messagesUrl, JSON.stringify(obj)).then((data) => data.json()),
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

export default useCreateBooking;
