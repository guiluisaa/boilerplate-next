import District from '@/models/Dictrict.model';
import delay from '@/utils/delay';

const districtsMock: District[] = [
  {
    id: '1',
    name: 'Pinheiros',
  },
  {
    id: '2',
    name: 'Santo Amaro',
  },
  {
    id: '3',
    name: 'Socorro',
  },
  {
    id: '4',
    name: 'Ipiranga',
  },
  {
    id: '5',
    name: 'Itaquera',
  },
  {
    id: '6',
    name: 'Jabaquara',
  },
];

export const getDistricts = async () => {
  await delay(1000);
  return districtsMock;
};

export const getFisrtsDistricts = async () => {
  await delay(1000);
  return districtsMock.filter(({ id }) => parseInt(id) <= 3);
};

export const getDistrict = async (id: string): Promise<District> => {
  await delay(1000);
  const district = districtsMock.filter(district => district.id === id)[0];

  if (!district) {
    return { id, name: 'Bairro sem nome', updatedAt: new Date().getTime() };
  }

  return { ...district, updatedAt: new Date().getTime() };
};

export default districtsMock;
