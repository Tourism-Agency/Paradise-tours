import { useMutation, useQueryClient } from 'react-query';

import api from '../Services/Api';

const useUpdateUser = (id) => {
  const QueryClient = useQueryClient();
  const usersUrl = `users/${id}`;

  return useMutation(
    (obj) =>
    api.put(usersUrl, JSON.stringify(obj)).then((data) => data.json()),
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

export default useUpdateUser;
