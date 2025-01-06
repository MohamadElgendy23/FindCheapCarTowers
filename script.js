import { carTowersArr } from "./CarTowers.js";

// useful variables
const vehicleMake = document.querySelector("#vehicle");
const vehicleLocation = document.querySelector("#location");
const findTowersBtn = document.querySelector("#find-towers");
const towersContainer = document.querySelector(".towers-container");

let sortPrice = false;

findTowersBtn.addEventListener("click", function () {
  const make = vehicleMake.value;
  const location = vehicleLocation.value;

  if (make && location) {
    // get the towers based on input
    
    const filteredTowers = carTowersArr.filter((tower) => {
      if (
        (tower.cars === "All Makes" || tower.cars.indexOf(make) !== -1) &&
        tower.location === location
      ) {
        return tower;
      }
    });

    // display filtered towers
    filteredTowers.forEach((tower) => {
      const { name, location, avgPrice } = tower;
      towersContainer.innerHTML += createTowerContainer(
        name,
        location,
        avgPrice
      );
    });
  }
});

function createTowerContainer(name, location, avgPrice) {}
