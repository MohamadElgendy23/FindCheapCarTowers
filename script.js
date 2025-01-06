import { carTowersArr } from "./CarTowers.js";

// useful variables
const vehicleMake = document.querySelector("#vehicle");
const vehicleLocation = document.querySelector("#location");
const priceSort = document.querySelector("#price-sort");
const findTowersBtn = document.querySelector("#find-towers");
const towersContainer = document.querySelector(".towers-container");

let sortPrice = false;

findTowersBtn.addEventListener("click", function () {
  const make = vehicleMake.value;
  const location = vehicleLocation.value;

  if (make && location) {
    // get the towers based on make and location input

    let filteredTowers = carTowersArr.filter((tower) => {
      if (
        (tower.cars[0] === "All Makes" || tower.cars.indexOf(make) !== -1) &&
        tower.location === location
      ) {
        return tower;
      }
    });

    // sort the towers by ascending price
    if (sortPrice) {
      filteredTowers = filteredTowers.sort(
        (tower1, tower2) => tower1.avgPrice - tower2.avgPrice
      );
      console.log(filteredTowers);
    }

    // display filtered towers
    renderFilteredTowers(filteredTowers);

    vehicleMake.value = "";
    vehicleLocation.value = "";
  }
});

priceSort.addEventListener("change", function () {
  if (priceSort.checked) {
    return (sortPrice = true);
  }
  sortPrice = false;
});

function renderFilteredTowers(filteredTowers) {
  filteredTowers.forEach((tower) => {
    const { name, location, avgPrice } = tower;
    towersContainer.innerHTML += createTowerContainer(
      name,
      location,
      avgPrice
    ).innerHTML;
  });
}

function createTowerContainer(name, location, avgPrice) {
  const towerDiv = document.createElement("div");
  towerDiv.className = "tower";

  const towerName = document.createElement("h3");
  towerName.innerHTML = name;

  const towerLocation = document.createElement("span");
  towerLocation.textContent = location;

  const towerAvgPrice = document.createElement("span");
  towerAvgPrice.textContent = "$" + avgPrice;

  towerDiv.appendChild(towerName);
  towerDiv.appendChild(towerLocation);
  towerDiv.appendChild(towerAvgPrice);

  return towerDiv;
}
