import { fetchAllCars, createNewCar, postNewCar } from './car';

// TODO: Build an awesome garage!
const apiUrl = "https://wagon-garage-api.herokuapp.com/ma-benz/cars";

const form = document.getElementById('new-car');
// 1. Add an event listener on the form
form.addEventListener('submit', (event) => {
  // 2. Prevent default behavior when we submit it
  event.preventDefault();
  // 3. Recover data entered by the user
  const car = createNewCar();
  // 4. Send a POST ajax request to the API
  postNewCar(apiUrl, car);
});

fetchAllCars(apiUrl);
