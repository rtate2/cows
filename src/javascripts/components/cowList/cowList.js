import smash from '../../helpers/data/smash';

import './cowList.scss';

const buildCows = () => {
  smash.getCompleteCows()
    .then((response) => {
      console.log('cow array from cowList', response);

      // call a domStringBuilder funtion and pass in a response (cows)
    })
    .catch((error) => {
      console.log('crap brok', error);
    });
};

export default { buildCows };
