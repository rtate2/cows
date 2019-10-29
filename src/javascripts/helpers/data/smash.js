import cowData from './cows';
import farmerData from './farmerData';
import farmerCowData from './farmerCowData';
// import farmerList from '../../components/farmerList/farmerList';


// This file is where you write functions that bring
// multiple collections together

const getCompleteCows = () => new Promise((resolve, reject) => {
  cowData.getCows()
    .then((cows) => {
      farmerData.getFarmers().then((farmers) => {
        farmerCowData.getFarmerCows().then((farmerCows) => {
          // do stuff
          const finalCows = [];
          cows.forEach((cow) => {
            const newCow = { ...cow };
            const farmerCowRecord = farmerCows.find((x) => x.cowId === cow.id);
            const owner = farmers.find((x) => x.id === farmerCowRecord.farmerId);
            newCow.owner = owner;
            finalCows.push(newCow);
          });
          resolve(finalCows);
        });
      });
    })
    .catch((error) => reject(error));
});

export default { getCompleteCows };
