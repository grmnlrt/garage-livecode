// TODO: Build an awesome garage!

// 1. call api with fetch
// 2. for each car
//    3. append car to the DOM

const urlApi = "https://wagon-garage-api.herokuapp.com/ma-benz/cars";

const fetchCars = (url) => {
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const list = document.querySelector(".cars-list");
      list.innerHTML = "";
      data.forEach((car) => {
        const html = `
          <div class="car">
            <div class="car-image">
              <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
            </div>
            <div class="car-info">
              <h4>${car.brand} ${car.model}</h4>
              <p><strong>Owner:</strong> ${car.owner}</p>
              <p><strong>Plate:</strong> ${car.plate}</p>
            </div>
          </div>
        `;
        list.insertAdjacentHTML('beforeend', html);
      });
    });
};
const form = document.getElementById("new-car");
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const car = {
    brand: document.getElementById("brand").value,
    model: document.getElementById("model").value,
    plate: document.getElementById("plate").value,
    owner: document.getElementById("owner").value
  };
  console.log(car);
  fetch(urlApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(car)
  }).then(fetchCars(urlApi));
});


// Select the form
// Add a listener on the form (submit)
// preventDefault
// Create car object
// post new car
// refresh cars list

fetchCars(urlApi);
