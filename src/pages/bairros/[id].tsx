import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import District from '@/models/Dictrict.model';
import DistrictView from '@/views/districts/district/District.view';
import { getDistrict, getFisrtsDistricts } from '@/__mocks__/districts.mock';
import { ParsedUrlQuery } from 'node:querystring';

type DistrictPageProps = {
  district: District;
};

const DistrictPage: NextPage<DistrictPageProps> = ({ district }) => (
  <DistrictView district={district} />
);

export const getStaticPaths: GetStaticPaths = async () => {
  const districts = await getFisrtsDistricts();
  const paths = districts.map(({ id }) => ({ params: { id } }));

  return {
    paths: paths,
    fallback: false,
  };
};

type DistrictPageParams = ParsedUrlQuery & {
  id: string;
};

export const getStaticProps: GetStaticProps<
  DistrictPageProps,
  DistrictPageParams
> = async ({ params }) => {
  const district = await getDistrict(params?.id as string);

  return {
    props: {
      district,
    },
    revalidate: 10,
  };
};

export default DistrictPage;
