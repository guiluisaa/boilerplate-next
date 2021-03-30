import { GetStaticProps, NextPage } from 'next';

import District from '@/models/Dictrict.model';

type DistrictsPageProps = {
  districts: District[];
};

const DistrictsPage: NextPage<DistrictsPageProps> = ({ districts }) => (
  <DistrictsPage districts={districts} />
);

export const getStaticProps: GetStaticProps<DistrictsPageProps> = async () => {
  // ...
};

export default DistrictsPage;
