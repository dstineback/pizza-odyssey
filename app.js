
//Note to instructors I deleted all the console logs once I was able to get it working
//function to run all the table info. Call function at the end of code for ballard, First Hill, Internationl District, South Lake Union, Georgetown, Ravenna. Call function inside of the form funtion for table being inputed by user.



// function functionName(totalPizza) {
//
//   for (var i = 0; i < totalArray.length; i++) {
//     var sum =(ballard.pizzaSold[i] + hill.pizzaSold[i] + inter.pizzaSold[i] + slu.pizzaSold[i] + georg.pizzaSold[i] + rav.pizzaSold[i]);
//     return sum;
//   }



function runTable(dataLocation) {

  var hOneChange = document.createElement('h1');
  hOneChange.textContent = dataLocation.name;
  document.getElementById('special').appendChild(hOneChange);

  var dataTable = document.createElement('table');
  var firstRow = generateHeadingRow(['Time', 'Pizza Sold', 'Pizza Deliverd', 'Drivers Needed']);
  dataTable.appendChild(firstRow);
  var makeTableData = document.getElementById('special');
  for (var i = 0; i < dataLocation.hourlyData.length; i++) {
    var fancyRow = generateDataRow([dataLocation.hourlyData[i].time, dataLocation.hourlyData[i].pizzaSold,   dataLocation.hourlyData[i].deliveriesMade, dataLocation.hourlyData[i].driversNeeded]);
    dataTable.appendChild(fancyRow);
  }
  document.getElementById('special').appendChild(dataTable);
}

function collectNewStore(event) {
  event.preventDefault();

// All the form input in variables
  var storeName = event.target.storeName.value;
  var hours8am = event.target.hours8am.value;
  var minPizza8am = parseInt(event.target.minPizza8am.value);
  var maxPizza8am = parseInt(event.target.maxPizza8am.value);
  var minDelivery8am = parseInt(event.target.minDelivery8am.value);
  var maxDelivery8am = parseInt(event.target.maxDelivery8am.value);

  var hours9am = event.target.hours9am.value;
  var minPizza9am = parseInt(event.target.minPizza9am.value);
  var maxPizza9am = parseInt(event.target.maxPizza9am.value);
  var minDelivery9am = parseInt(event.target.minDelivery9am.value);
  var maxDelivery9am = parseInt(event.target.maxDelivery9am.value);

  var hours10am = event.target.hours10am.value;
  var minPizza10am = parseInt(event.target.minPizza10am.value);
  var maxPizza10am = parseInt(event.target.maxPizza10am.value);
  var minDelivery10am = parseInt(event.target.minDelivery10am.value);
  var maxDelivery10am = parseInt(event.target.maxDelivery10am.value);

  var hours11am = event.target.hours11am.value;
  var minPizza11am = parseInt(event.target.minPizza11am.value);
  var maxPizza11am = parseInt(event.target.maxPizza11am.value);
  var minDelivery11am = parseInt(event.target.minDelivery11am.value);
  var maxDelivery11am = parseInt(event.target.maxDelivery11am.value);

  var hoursNoon = event.target.hoursNoon.value;
  var minPizzaNoon = parseInt(event.target.minPizzaNoon.value);
  var maxPizzaNoon = parseInt(event.target.maxPizzaNoon.value);
  var minDeliveryNoon = parseInt(event.target.minDeliveryNoon.value);
  var maxDeliveryNoon = parseInt(event.target.maxDeliveryNoon.value);

  var hours1pm = event.target.hours1pm.value;
  var minPizza1pm = parseInt(event.target.minPizza1pm.value);
  var maxPizza1pm = parseInt(event.target.maxPizza1pm.value);
  var minDelivery1pm = parseInt(event.target.minDelivery1pm.value);
  var maxDelivery1pm = parseInt(event.target.maxDelivery1pm.value);

  var hours2pm = event.target.hours2pm.value;
  var minPizza2pm = parseInt(event.target.minPizza2pm.value);
  var maxPizza2pm = parseInt(event.target.maxPizza2pm.value);
  var minDelivery2pm = parseInt(event.target.minDelivery2pm.value);
  var maxDelivery2pm = parseInt(event.target.maxDelivery2pm.value);

  var hours3pm = event.target.hours3pm.value;
  var minPizza3pm = parseInt(event.target.minPizza3pm.value);
  var maxPizza3pm = parseInt(event.target.maxPizza3pm.value);
  var minDelivery3pm = parseInt(event.target.minDelivery3pm.value);
  var maxDelivery3pm = parseInt(event.target.maxDelivery3pm.value);

  var hours4pm = event.target.hours4pm.value;
  var minPizza4pm = parseInt(event.target.minPizza4pm.value);
  var maxPizza4pm = parseInt(event.target.maxPizza4pm.value);
  var minDelivery4pm = parseInt(event.target.minDelivery4pm.value);
  var maxDelivery4pm = parseInt(event.target.maxDelivery4pm.value);

  var hours5pm = event.target.hours5pm.value;
  var minPizza5pm = parseInt(event.target.minPizza5pm.value);
  var maxPizza5pm = parseInt(event.target.maxPizza5pm.value);
  var minDelivery5pm = parseInt(event.target.minDelivery5pm.value);
  var maxDelivery5pm = parseInt(event.target.maxDelivery5pm.value);

  var hours6pm = event.target.hours6pm.value;
  var minPizza6pm = parseInt(event.target.minPizza6pm.value);
  var maxPizza6pm = parseInt(event.target.maxPizza6pm.value);
  var minDelivery6pm = parseInt(event.target.minDelivery6pm.value);
  var maxDelivery6pm = parseInt(event.target.maxDelivery6pm.value);

  var hours7pm = event.target.hours7pm.value;
  var minPizza7pm = parseInt(event.target.minPizza7pm.value);
  var maxPizza7pm = parseInt(event.target.maxPizza7pm.value);
  var minDelivery7pm = parseInt(event.target.minDelivery7pm.value);
  var maxDelivery7pm = parseInt(event.target.maxDelivery7pm.value);

  var hours8pm = event.target.hours8pm.value;
  var minPizza8pm = parseInt(event.target.minPizza8pm.value);
  var maxPizza8pm = parseInt(event.target.maxPizza8pm.value);
  var minDelivery8pm = parseInt(event.target.minDelivery8pm.value);
  var maxDelivery8pm = parseInt(event.target.maxDelivery8pm.value);

  var hours9pm = event.target.hours9pm.value;
  var minPizza9pm = parseInt(event.target.minPizza9pm.value);
  var maxPizza9pm = parseInt(event.target.maxPizza9pm.value);
  var minDelivery9pm = parseInt(event.target.minDelivery9pm.value);
  var maxDelivery9pm = parseInt(event.target.maxDelivery9pm.value);

  var hours10pm = event.target.hours10pm.value;
  var minPizza10pm = parseInt(event.target.minPizza10pm.value);
  var maxPizza10pm = parseInt(event.target.maxPizza10pm.value);
  var minDelivery10pm = parseInt(event.target.minDelivery10pm.value);
  var maxDelivery10pm = parseInt(event.target.maxDelivery10pm.value);

  var hours11pm = event.target.hours11pm.value;
  var minPizza11pm = parseInt(event.target.minPizza11pm.value);
  var maxPizza11pm = parseInt(event.target.maxPizza11pm.value);
  var minDelivery11pm = parseInt(event.target.minDelivery11pm.value);
  var maxDelivery11pm = parseInt(event.target.maxDelivery11pm.value);

  var hoursMidnight = event.target.hoursMidnight.value;
  var minPizzaMidnight = parseInt(event.target.minPizzaMidnight.value);
  var maxPizzaMidnight = parseInt(event.target.maxPizzaMidnight.value);
  var minDeliveryMidnight = parseInt(event.target.minDeliveryMidnight.value);
  var maxDeliveryMidnight = parseInt(event.target.maxDeliveryMidnight.value);

  var hours1am = event.target.hours1am.value;
  var minPizza1am = parseInt(event.target.minPizza1am.value);
  var maxPizza1am = parseInt(event.target.maxPizza1am.value);
  var minDelivery1am = parseInt(event.target.minDelivery1am.value);
  var maxDelivery1am = parseInt(event.target.maxDelivery1am.value);

  //data being pushed into new constructor
  var formCreatedStore = new PizzaLocation(storeName);
  formCreatedStore.pushhourlyData(new hourlyData(hours8am, minPizza8am, maxPizza8am, minDelivery8am, maxDelivery8am));
  formCreatedStore.pushhourlyData(new hourlyData(hours9am, minPizza9am, maxPizza9am, minDelivery9am, maxDelivery9am));
  formCreatedStore.pushhourlyData(new hourlyData(hours10am, minPizza10am, maxPizza10am, minDelivery10am, maxDelivery10am));
  formCreatedStore.pushhourlyData(new hourlyData(hours11am, minPizza11am, maxPizza11am, minDelivery11am, maxDelivery11am));
  formCreatedStore.pushhourlyData(new hourlyData(hours11am, minPizza11am, maxPizza11am, minDelivery11am, maxDelivery11am));
  formCreatedStore.pushhourlyData(new hourlyData(hoursNoon, minPizzaNoon, maxPizzaNoon, minDeliveryNoon, maxDeliveryNoon));
  formCreatedStore.pushhourlyData(new hourlyData(hours1pm, minPizza1pm, maxPizza1pm, minDelivery1pm, maxDelivery1pm));
  formCreatedStore.pushhourlyData(new hourlyData(hours2pm, minPizza2pm, maxPizza2pm, minDelivery2pm, maxDelivery2pm));
  formCreatedStore.pushhourlyData(new hourlyData(hours3pm, minPizza3pm, maxPizza3pm, minDelivery3pm, maxDelivery3pm));
  formCreatedStore.pushhourlyData(new hourlyData(hours4pm, minPizza4pm, maxPizza4pm, minDelivery4pm, maxDelivery4pm));
  formCreatedStore.pushhourlyData(new hourlyData(hours5pm, minPizza5pm, maxPizza5pm, minDelivery5pm, maxDelivery5pm));
  formCreatedStore.pushhourlyData(new hourlyData(hours6pm, minPizza6pm, maxPizza6pm, minDelivery6pm, maxDelivery6pm));
  formCreatedStore.pushhourlyData(new hourlyData(hours7pm, minPizza7pm, maxPizza7pm, minDelivery7pm, maxDelivery7pm));
  formCreatedStore.pushhourlyData(new hourlyData(hours8pm, minPizza8pm, maxPizza8pm, minDelivery8pm, maxDelivery8pm));
  formCreatedStore.pushhourlyData(new hourlyData(hours9pm, minPizza9pm, maxPizza9pm, minDelivery9pm, maxDelivery9pm));
  formCreatedStore.pushhourlyData(new hourlyData(hours10pm, minPizza10pm, maxPizza10pm, minDelivery10pm, maxDelivery10pm));
  formCreatedStore.pushhourlyData(new hourlyData(hours11pm, minPizza11pm, maxPizza11pm, minDelivery11pm, maxDelivery11pm));
  formCreatedStore.pushhourlyData(new hourlyData(hoursMidnight, minPizzaMidnight, maxPizzaMidnight, minDeliveryMidnight, maxDeliveryMidnight));
  formCreatedStore.pushhourlyData(new hourlyData(hours1am, minPizza1am, maxPizza1am, minDelivery1am, maxDelivery1am));
  //Name that the user imputs will display above the table
  runTable(formCreatedStore);
}

//creates the Event Handler
var createStoreForm = document.getElementById('newStore');
createStoreForm.addEventListener('submit', collectNewStore);

//Math funtion to randomize min/max
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//store location constructor
function PizzaLocation(name) {
  this.name = name;
  this.hourlyData = [];
}

PizzaLocation.prototype.pushhourlyData = function(data) {
  this.hourlyData.push(data);
};

function hourlyData(time, minPizzaSold, maxPizzaSold, minDeliveriesMade, maxDelieveries) {
  this.time = time;
  this.pizzaSold = getRandomIntInclusive(minPizzaSold, maxPizzaSold);
  this.deliveriesMade = getRandomIntInclusive(minDeliveriesMade, maxDelieveries);
  this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
}

function generateDataRow(arrayForColum){
  var row = document.createElement('tr');
  var col;
  for (var i = 0; i < arrayForColum.length; i++) {
    col = document.createElement('td');
    col.textContent = arrayForColum[i];
    row.appendChild(col);
  }
  return row;
}
console.log('generatDataRow function ballard');

function generateHeadingRow(data) {
  var row = document.createElement('tr');
  var col;
  for (var i = 0; i < data.length; i++) {
    col = document.createElement('th');
    col.textContent = data[i];
    row.appendChild(col);
  }
  return row;
}

// var totalArray = (ballard.pizzaSold[i],hill.pizzaSold[i], inter.pizzaSold[i], slu.pizzaSold[i], georg.pizzaSold[i], rav.pizzaSold[i]);
//ballard store
var ballard = new PizzaLocation('ballard');
ballard.pushhourlyData(new hourlyData('8:00 am', 0, 3, 1, 7));
ballard.pushhourlyData(new hourlyData('9:00 am', 0, 3, 1, 7));
ballard.pushhourlyData(new hourlyData('10:00 am', 0, 3, 1, 7));
ballard.pushhourlyData(new hourlyData('11:00 am', 5, 10, 2, 8));
ballard.pushhourlyData(new hourlyData('Noon ', 5, 10, 2, 8));
ballard.pushhourlyData(new hourlyData('1:00 pm', 5, 10, 2, 8));
ballard.pushhourlyData(new hourlyData('2:00 pm', 2, 13, 1, 7));
ballard.pushhourlyData(new hourlyData('3:00 pm', 2, 13, 1, 7));
ballard.pushhourlyData(new hourlyData('4:00 pm', 2, 13, 1, 7));
ballard.pushhourlyData(new hourlyData('5:00 pm', 2, 13, 1, 7));
ballard.pushhourlyData(new hourlyData('6:00 pm', 0, 15, 2, 9));
ballard.pushhourlyData(new hourlyData('7:00 pm', 0, 15, 2, 9));
ballard.pushhourlyData(new hourlyData('8:00 pm', 1, 3, 4, 12));
ballard.pushhourlyData(new hourlyData('9:00 pm', 1, 3, 4, 12));
ballard.pushhourlyData(new hourlyData('10:00 pm', 1, 3, 4, 12));
ballard.pushhourlyData(new hourlyData('11:00 pm', 8, 15, 6, 16));
ballard.pushhourlyData(new hourlyData('Midnight', 8, 15, 6, 16));
ballard.pushhourlyData(new hourlyData('1:00 am', 8, 15, 6, 16));
ballard.name = 'Ballard';

//First Hill store
var hill = new PizzaLocation('hill');
hill.pushhourlyData(new hourlyData('8:00 am', 1, 3, 1, 7));
hill.pushhourlyData(new hourlyData('9:00 am', 0, 3, 1, 7));
hill.pushhourlyData(new hourlyData('10:00 am', 0, 3, 1, 7));
hill.pushhourlyData(new hourlyData('11:00 am', 5, 9, 2, 8));
hill.pushhourlyData(new hourlyData('Noon ', 5, 9, 2, 8));
hill.pushhourlyData(new hourlyData('1:00 pm', 5, 9, 2, 8));
hill.pushhourlyData(new hourlyData('2:00 pm', 2, 13, 1, 6));
hill.pushhourlyData(new hourlyData('3:00 pm', 2, 13, 1, 6));
hill.pushhourlyData(new hourlyData('4:00 pm', 2, 13, 1, 6));
hill.pushhourlyData(new hourlyData('5:00 pm', 2, 13, 1, 6));
hill.pushhourlyData(new hourlyData('6:00 pm', 18, 32, 3, 9));
hill.pushhourlyData(new hourlyData('7:00 pm', 18, 32, 3, 9));
hill.pushhourlyData(new hourlyData('8:00 pm', 1, 3, 5, 12));
hill.pushhourlyData(new hourlyData('9:00 pm', 1, 3, 5, 12));
hill.pushhourlyData(new hourlyData('10:00 pm', 1, 3, 5, 12));
hill.pushhourlyData(new hourlyData('11:00 pm', 8, 20, 6, 16));
hill.pushhourlyData(new hourlyData('Midnight', 8, 20, 6, 16));
hill.pushhourlyData(new hourlyData('1:00 am', 8, 20, 6, 16));
hill.name = 'First Hill';

//inter Store info
var inter = new PizzaLocation('inter');
inter.pushhourlyData(new hourlyData('8:00 am', 0, 4, 0, 4));
inter.pushhourlyData(new hourlyData('9:00 am', 0, 4, 0, 4));
inter.pushhourlyData(new hourlyData('10:00 am', 0, 4, 0, 4));
inter.pushhourlyData(new hourlyData('11:00 am', 0, 7, 0, 4));
inter.pushhourlyData(new hourlyData('Noon ', 0, 7, 0, 4));
inter.pushhourlyData(new hourlyData('1:00 pm', 0, 7, 0, 4));
inter.pushhourlyData(new hourlyData('2:00 pm', 2, 15, 1, 4));
inter.pushhourlyData(new hourlyData('3:00 pm', 2, 15, 1, 4));
inter.pushhourlyData(new hourlyData('4:00 pm', 2, 15, 1, 4));
inter.pushhourlyData(new hourlyData('5:00 pm', 10, 26, 1, 6));
inter.pushhourlyData(new hourlyData('6:00 pm', 10, 26, 1, 6));
inter.pushhourlyData(new hourlyData('7:00 pm', 10, 26, 1, 6));
inter.pushhourlyData(new hourlyData('8:00 pm', 8, 22, 7, 15));
inter.pushhourlyData(new hourlyData('9:00 pm', 8, 22, 7, 15));
inter.pushhourlyData(new hourlyData('10:00 pm', 8, 22, 7, 15));
inter.pushhourlyData(new hourlyData('11:00 pm', 0, 2, 2, 8));
inter.pushhourlyData(new hourlyData('Midnight', 0, 2, 2, 8));
inter.pushhourlyData(new hourlyData('1:00 am', 0, 2, 2, 8));
inter.name = 'Internationl District';

//South Lake Union store
var slu = new PizzaLocation('slu');
slu.pushhourlyData(new hourlyData('8:00 am', 0, 4, 0, 4));
slu.pushhourlyData(new hourlyData('9:00 am', 0, 4, 0, 4));
slu.pushhourlyData(new hourlyData('10:00 am', 0, 4, 0, 4));
slu.pushhourlyData(new hourlyData('11:00 am', 0, 7, 0, 4));
slu.pushhourlyData(new hourlyData('Noon ', 0, 7, 0, 4));
slu.pushhourlyData(new hourlyData('1:00 pm', 0, 7, 0, 4));
slu.pushhourlyData(new hourlyData('2:00 pm', 5, 15, 0, 4));
slu.pushhourlyData(new hourlyData('3:00 pm', 5, 15, 0, 4));
slu.pushhourlyData(new hourlyData('4:00 pm', 5, 15, 0, 4));
slu.pushhourlyData(new hourlyData('5:00 pm', 25, 39, 13, 18));
slu.pushhourlyData(new hourlyData('6:00 pm', 25, 39, 13, 18));
slu.pushhourlyData(new hourlyData('7:00 pm', 25, 39, 13, 18));
slu.pushhourlyData(new hourlyData('8:00 pm', 22, 36, 5, 22));
slu.pushhourlyData(new hourlyData('9:00 pm', 22, 36, 5, 22));
slu.pushhourlyData(new hourlyData('10:00 pm', 22, 36, 5, 22));
slu.pushhourlyData(new hourlyData('11:00 pm', 5, 25, 5, 31));
slu.pushhourlyData(new hourlyData('Midnight', 5, 25, 5, 31));
slu.pushhourlyData(new hourlyData('1:00 am', 5, 25, 5, 31));
slu.name = 'South Lake Union';

//Georgetown store
var georg = new PizzaLocation('georg');
georg.pushhourlyData(new hourlyData('8:00 am', 2, 7, 3, 5));
georg.pushhourlyData(new hourlyData('9:00 am', 2, 7, 3, 5));
georg.pushhourlyData(new hourlyData('10:00 am', 2, 7, 3, 5));
georg.pushhourlyData(new hourlyData('11:00 am', 3, 8, 3, 9));
georg.pushhourlyData(new hourlyData('Noon ', 3, 8, 3, 9));
georg.pushhourlyData(new hourlyData('1:00 pm', 3, 8, 3, 9));
georg.pushhourlyData(new hourlyData('2:00 pm', 1, 5, 1, 4));
georg.pushhourlyData(new hourlyData('3:00 pm', 1, 5, 1, 4));
georg.pushhourlyData(new hourlyData('4:00 pm', 1, 5, 1, 4));
georg.pushhourlyData(new hourlyData('5:00 pm', 5, 13, 2, 4));
georg.pushhourlyData(new hourlyData('6:00 pm', 5, 13, 2, 4));
georg.pushhourlyData(new hourlyData('7:00 pm', 5, 13, 2, 4));
georg.pushhourlyData(new hourlyData('8:00 pm', 22, 41, 15, 42));
georg.pushhourlyData(new hourlyData('9:00 pm', 22, 41, 15, 42));
georg.pushhourlyData(new hourlyData('10:00 pm', 22, 41, 15, 42));
georg.pushhourlyData(new hourlyData('11:00 pm', 15, 20, 6, 21));
georg.pushhourlyData(new hourlyData('Midnight', 15, 20, 6, 21));
georg.pushhourlyData(new hourlyData('1:00 am', 15, 20, 6, 21));
georg.name = 'Georgetown';

//rav store
var rav = new PizzaLocation('rav');
rav.pushhourlyData(new hourlyData('8:00 am', 0, 4, 0, 4));
rav.pushhourlyData(new hourlyData('9:00 am', 0, 4, 0, 4));
rav.pushhourlyData(new hourlyData('10:00 am', 0, 4, 0, 4));
rav.pushhourlyData(new hourlyData('11:00 am', 0, 7, 0, 4));
rav.pushhourlyData(new hourlyData('Noon ', 0, 7, 0, 4));
rav.pushhourlyData(new hourlyData('1:00 pm', 0, 7, 0, 4));
rav.pushhourlyData(new hourlyData('2:00 pm', 2, 15, 1, 4));
rav.pushhourlyData(new hourlyData('3:00 pm', 2, 15, 1, 4));
rav.pushhourlyData(new hourlyData('4:00 pm', 2, 15, 1, 4));
rav.pushhourlyData(new hourlyData('5:00 pm', 6, 9, 5, 18));
rav.pushhourlyData(new hourlyData('6:00 pm', 6, 9, 5, 18));
rav.pushhourlyData(new hourlyData('7:00 pm', 6, 9, 5, 18));
rav.pushhourlyData(new hourlyData('8:00 pm', 4, 8, 2, 5));
rav.pushhourlyData(new hourlyData('9:00 pm', 4, 8, 2, 5));
rav.pushhourlyData(new hourlyData('10:00 pm', 4, 8, 2, 5));
rav.pushhourlyData(new hourlyData('11:00 pm', 2, 4, 3, 11));
rav.pushhourlyData(new hourlyData('Midnight', 2, 4, 3, 11));
rav.pushhourlyData(new hourlyData('1:00 am', 2, 4, 3, 11));
rav.name = 'Ravenna';

//call the runTable function from top of the page to run for each location.
runTable(ballard);
runTable(hill);
runTable(inter);
runTable(georg);
runTable(rav);
