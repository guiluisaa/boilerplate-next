import { FC } from 'react';
import Link from 'next/link';

import District from '@/models/Dictrict.model';

type DistrictsViewProps = {
  districts: District[];
};

const DistrictsView: FC<DistrictsViewProps> = ({ districts }) => (
  <>
    <p>
      <Link href="/">Home</Link>
    </p>
    <ul>
      {districts.map(district => (
        <li key={district.id}>
          <Link href={`/bairros/${district.id}`}>{district.name}</Link>
        </li>
      ))}
    </ul>
  </>
);

export default DistrictsView;
