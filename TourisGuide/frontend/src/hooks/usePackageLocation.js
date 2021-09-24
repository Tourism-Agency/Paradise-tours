import { useQuery } from 'react-query';

import api from '../Services/Api';

const usePackageLocation = ({id}) => {
  const fetchPackagesLocation = async () => {
    try {
      if(id){
        const packages = await api.get(`packages/location/${id}`);
     
        const data = await packages.json();
        return data.locations;
      }
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(['package-location',id], fetchPackagesLocation, {
    refetchOnWindowFocus: false,
  });
};

export default usePackageLocation;