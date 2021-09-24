import { useMutation, useQueryClient } from 'react-query';

import api from '../Services/Api';

const useDeleteSkill = (id) => {
  const QueryClient = useQueryClient();
  const usersUrl = `guide-detail/${id}`;

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

export default useDeleteSkill