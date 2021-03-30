import { FC } from 'react';

import District from '@/models/Dictrict.model';

type DistrictsViewProps = {
  districts: District[];
};

const DistrictsView: FC<DistrictsViewProps> = ({ districts }) => (
  <div>
    {districts.map(district => (
      <div key={district.id}>
        <p>{district.id}</p>
        <p>{district.name}</p>
      </div>
    ))}
  </div>
);

export default DistrictsView;
