import {apiGet} from './api';

type GetListDaerahParams = {
  type: 'provinsi' | 'kota' | 'kecamatan' | 'desa';
  idParent?: string;
};
// get list provinsi/kota/kecamata/desa
export const getListDaerah = async ({type, idParent}: GetListDaerahParams) => {
  let url = `daerah/${type}`;
  if (idParent) {
    url += `/${idParent}`;
  }

  const {data} = await apiGet({url});

  return data;
};
