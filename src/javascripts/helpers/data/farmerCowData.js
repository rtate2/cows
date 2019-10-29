import axios from 'axios';
// import axios from '../../../../db'

const getFarmerCows = () => new Promise((resolve, reject) => {
  axios.get('../../../../db/farmerCows.json')
    .then((response) => {
    // do stuff
      const demFarmerCows = response.data.farmerCows;
      const farmerCows = [];
      Object.keys(demFarmerCows).forEach((farmerCowId) => {
        demFarmerCows[farmerCowId].id = farmerCowId;
        farmerCows.push(demFarmerCows[farmerCowId]);
      });
      resolve(farmerCows);
    })
    .catch((error) => reject(error));
});

export default { getFarmerCows };
