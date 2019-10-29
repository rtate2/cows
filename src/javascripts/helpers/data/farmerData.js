import axios from 'axios';
// import farmerList from '../../components/farmerList/farmerList';

const getFarmers = () => new Promise((resolve, reject) => {
  axios.get('../../../../db/farmers.json')
    .then((response) => {
    // do some stuff
      const demFarmers = response.data.farmers;
      const farmers = [];
      Object.keys(demFarmers).forEach((farmerId) => {
        demFarmers[farmerId].id = farmerId;
        farmers.push(demFarmers[farmerId]);
      });
      resolve(farmers);
    })
    .catch((error) => reject(error));
});

export default { getFarmers };
