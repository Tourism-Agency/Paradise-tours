import { useMutation, useQueryClient } from 'react-query';

import api from '../Services/Api';

const useCreateGuideDetails = () => {
  const QueryClient = useQueryClient();
  const guideDetailsUrl = `guide-detail`;

  return useMutation(
    (obj) =>
    api.post(guideDetailsUrl, JSON.stringify(obj)).then((data) => data.json()),
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

export default useCreateGuideDetails;
