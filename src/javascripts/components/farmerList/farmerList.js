import farmerData from '../../helpers/data/farmerData';

import './farmerList.scss';

const buildFarmers = () => {
  farmerData.getFarmers()
    .then((farmers) => {
      console.log('farmerArray from farmer list', farmers);
    })
    .catch((error) => console.error('crap broke', error));
};

export default { buildFarmers };
