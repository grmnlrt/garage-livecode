const fetchAllCars = (url) => {
  // 1. send ajax request to fetch all cars
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const list = document.querySelector('.cars-list');
      list.innerHTML = "";
      // 2. for each cars
      data.forEach((car) => {
        const brand = car.brand;
        const model = car.model;
        const owner = car.owner;
        const plate = car.plate;

        const row = `
          <div class="car">
            <div class="car-image">
              <img src="http://loremflickr.com/280/280/${brand} ${model}" />
            </div>
            <div class="car-info">
              <h4>${brand} ${model}</h4>
              <p><strong>Owner:</strong> ${owner}</p>
              <p><strong>Plate:</strong> ${plate}</p>
            </div>
          </div>
        `;
        //   3. Insert a new row in the car table
        list.insertAdjacentHTML('beforeend', row);
      });
    });
};

const createNewCar = () => {
  const car = {
    brand: document.getElementById('brand').value,
    model: document.getElementById('model').value,
    plate: document.getElementById('plate').value,
    owner: document.getElementById('owner').value
  };
  return car;
};

const postNewCar = (url, car) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  }).then(fetchAllCars(url)); // 5. Refresh cars list
};

export { fetchAllCars, createNewCar, postNewCar };
