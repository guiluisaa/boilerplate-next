import { GetStaticProps, NextPage } from 'next';

import District from '@/models/Dictrict.model';
import { getDistricts } from '@/__mocks__/districts.mock';

type DistrictsPageProps = {
  districts: District[];
};

const DistrictsPage: NextPage<DistrictsPageProps> = ({ districts }) => (
  <DistrictsPage districts={districts} />
);

export const getStaticProps: GetStaticProps<DistrictsPageProps> = async () => {
  const districts = await getDistricts();

  return {
    props: {
      districts,
    },
    revalidate: 10,
  };
};

export default DistrictsPage;
