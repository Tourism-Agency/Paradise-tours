import { useMutation, useQueryClient } from 'react-query';

import api from '../Services/Api';

const useUpdateGuide = () => {
  const QueryClient = useQueryClient();
  const guidesUrl = `guides`;

  return useMutation(
    (obj) =>
    api.post(guidesUrl, JSON.stringify(obj)).then((data) => data.json()),
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

export default useUpdateGuide;
