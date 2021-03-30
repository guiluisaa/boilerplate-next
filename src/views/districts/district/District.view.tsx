import { FC } from 'react';
import Link from 'next/link';

import District from '@/models/Dictrict.model';

type DistrictViewProps = {
  district: District;
};

const DistrictView: FC<DistrictViewProps> = ({ district }) => (
  <div>
    <p>
      <Link href="/">Home</Link> <Link href="/bairos">Back</Link>
    </p>

    <p>{district.id}</p>
    <p>{district.name}</p>
    {district.updatedAt && <p>{district.updatedAt}</p>}
  </div>
);

export default DistrictView;
