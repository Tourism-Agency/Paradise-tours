import { useMutation, useQueryClient } from 'react-query';

import api from '../Services/Api';

const useDeleteMessage = (id) => {
  const QueryClient = useQueryClient();
  const usersUrl = `messages/${id}`;

  return useMutation(
    (obj) =>
    api.delete(usersUrl, JSON.stringify(obj)).then((data) => data.json()),
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

export default useDeleteMessage;
