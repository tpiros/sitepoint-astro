const data = [
  {
    id: 1,
    city: 'London',
    info: 'The capital of old Blighty',
  },
  {
    id: 2,
    city: 'Singapore',
    info: 'The Lion City',
  },
];
const getCityData = (id) => {
  return new Promise((resolve, reject) => {
    const city = data.find((d) => d.id === +id);
    if (city) {
      resolve(city);
    } else {
      reject(new Error('City not found'));
    }
  });
};

const addCity = () => {
  // add city implementation
};

export { getCityData, addCity };
