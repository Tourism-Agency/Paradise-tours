import { useQuery } from 'react-query';

import api from '../Services/Api';

const usePackageTranspost = ({id}) => {
  const fetchPackagesTransport = async () => {
    try {
      if(id){
        const packages = await api.get(`packages/transport/${id}`);
     
        const data = await packages.json();
        return data.transports;
      }
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(['package-transport',id], fetchPackagesTransport, {
    refetchOnWindowFocus: false,
  });
};

export default usePackageTranspost;