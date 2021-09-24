import { useQuery } from 'react-query';

import api from '../Services/Api';

const usePackage = ({id}) => {
  const fetchPackages = async () => {
    try {
      // if(Object.keys(id).length !== 0){
        const packages = await api.get(`packages/${id}`);
     
        const data = await packages.json();
        return data.package;
      
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(['package',id], fetchPackages, {
    refetchOnWindowFocus: false,
  });
};

export default usePackage;