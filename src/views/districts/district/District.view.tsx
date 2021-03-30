import { FC } from 'react';

import District from '@/models/Dictrict.model';

type DistrictViewProps = {
  district: District;
};

const DistrictView: FC<DistrictViewProps> = ({ district }) => (
  <div>
    <p>{district.id}</p>
    <p>{district.name}</p>
    {district.updatedAt && <p>{district.updatedAt}</p>}
  </div>
);

export default DistrictView;
