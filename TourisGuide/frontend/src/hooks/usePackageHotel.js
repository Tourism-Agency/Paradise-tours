import { useQuery } from 'react-query';

import api from '../Services/Api';

const usePackageHotel = ({id}) => {
  const fetchPackagesHotel = async () => {
    try {
      if(id){
        const packages = await api.get(`packages/hotel/${id}`);
     
        const data = await packages.json();
        return data.hotels;
    }
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(['package-hotel',id], fetchPackagesHotel, {
    refetchOnWindowFocus: false,
  });
};

export default usePackageHotel;