
console.log('javascript is working');

// function newStoreTableName(event) {
//   event.preventDefault();
//   console.log('event target');
//   var  createStoreName = document.getElementById('newStore');
//   console.log('New store name');
//
//   var createName = event.tartget.createName.value;
//   var tableHead = document.createElement('h1');
//   tableHead.textContent = createName;
//   tableHead.appendChild(tableHead);
// }
// console.log('Store name function');
//
// var createStoreNameforTable = document.getElementById('newStore');
// createStoreNameforTable.addEventListener('submit', newStoreTableName);

function collectNewStore(event) {
  event.preventDefault();
  console.log('event target');

  var createStoreTable = document.getElementById('newStoreTable');
  console.log('new store table');
// All the form input in variables
  var storeName = event.target.storeName.value;
  console.log('storeName');
  var hours = event.target.hours.value;
  console.log('event hours');
  var minPizza = event.target.minPizza.value;
  console.log('event min Pizza');
  var maxPizza = event.target.maxPizza.value;
  console.log('event max pizza');
  var minDelivery = event.target.minDelivery.value;
  console.log('event min delivered');
  var maxDelivery = event.target.maxDelivery.value;
  console.log('event max delivered');
// The Dom directions for each variable
  var firstRow = generateHeadingRow(['Time', 'Pizza Sold', 'Pizza Deliverd', 'Drivers Needed']);
  ballardTable.appendChild(firstRow);

  var timeRow = document.createElement('tr');
  console.log('hour row');

  var storeNameColumn = document.createElement('td');
  console.log('name colum');
  storeNameColumn.textContent = storeName;
  timeRow.appendChild(storeNameColumn);
  createStoreTable.appendChild(timeRow);

  var hourColumn = document.createElement('td');
  console.log('hour column');
  hourColumn.textContent = hours;
  timeRow.appendChild(hourColumn);
  createStoreTable.appendChild(timeRow);

  var minPizzaColumn = document.createElement('td');
  minPizzaColumn.textContent = minPizza;
  timeRow.appendChild(minPizzaColumn);
  createStoreTable.appendChild(timeRow);

  console.log('maxPizza row');
  var maxPizzaColumn = document.createElement('td');
  maxPizzaColumn.textContent = maxPizza;
  timeRow.appendChild(maxPizzaColumn);
  createStoreTable.appendChild(timeRow);

  var minDeliveryColumn = document.createElement('td');
  minDeliveryColumn.textContent = minDelivery;
  timeRow.appendChild(minDeliveryColumn);
  createStoreTable.appendChild(timeRow);

  var maxDeliveryColumn = document.createElement('td');
  maxDeliveryColumn.textContent = maxDelivery;
  timeRow.appendChild(maxDeliveryColumn);

  createStoreTable.appendChild(timeRow);

}

var createStoreForm = document.getElementById('newStore');

createStoreForm.addEventListener('submit', collectNewStore);



//could not get total pizza to work yet.
// function totalPizza(storeLocation){
//   for (var i = 0; i < storeLocation.hourlyData.length; i++){
//     pizzaOdysseys += storeLocation.hourlyData[i].pizzaSold;
//   }
// }
// console.log('totalPizza');
//
// totalPizza(ballard);
// console.log('totalPizza ballard');
// totalPizza(hill);
// console.log('totalPizza hill');
// totalPizza(inter);
// console.log('inter');
// totalPizza(slu);
// console.log('slu');
// totalPizza(georg);
// console.log('georg');
// totalPizza(rav);
// console.log('rav');
//
// document.getElementById('totalPizza').textContent = totalPizza, ' Happy pizza odysseys this week!';

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('math function');

function PizzaLocation(name) {
  this.name = name;
  this.hourlyData = [];
}
console.log('pizza location');

PizzaLocation.prototype.pushhourlyData = function(data) {
  this.hourlyData.push(data);
};
console.log('PizzaLocation prototype');

function hourlyData(time, minPizzaSold, maxPizzaSold, minDeliveriesMade, maxDelieveries) {
  this.time = time;
  this.pizzaSold = getRandomIntInclusive(minPizzaSold, maxPizzaSold);
  this.deliveriesMade = getRandomIntInclusive(minDeliveriesMade, maxDelieveries);
  this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
}
console.log('hourlyData function');

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
console.log('generateHeadingRow function ballad');

var ballardTable = document.getElementById('ballard');

var firstRow = generateHeadingRow(['Time', 'Pizza Sold', 'Pizza Deliverd', 'Drivers Needed']);
ballardTable.appendChild(firstRow);
for (var i = 0; i < ballard.hourlyData.length; i++) {

  var fancyRow = generateDataRow([ballard.hourlyData[i].time, ballard.hourlyData[i].pizzaSold, ballard.hourlyData[i].deliveriesMade, ballard.hourlyData[i].driversNeeded]);

  ballardTable.appendChild(fancyRow);
}
console.log('fancyRow for loop ballard');

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

console.log('generatDataRow function hill');

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
console.log('generateHeadingRow function hill');

var hillTable = document.getElementById('hill');

var firstRow = generateHeadingRow(['Time', 'Pizza Sold', 'Pizza Deliverd', 'Drivers Needed']);
hillTable.appendChild(firstRow);
for (var i = 0; i < hill.hourlyData.length; i++) {

  var fancyRow = generateDataRow([hill.hourlyData[i].time, hill.hourlyData[i].pizzaSold, hill.hourlyData[i].deliveriesMade, hill.hourlyData[i].driversNeeded]);

  hillTable.appendChild(fancyRow);
}
console.log('fancyRow for loop hill');

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
console.log('generatDataRow function inter');

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
console.log('generateHeadingRow function inter');

var interTable = document.getElementById('inter');

var firstRow = generateHeadingRow(['Time', 'Pizza Sold', 'Pizza Deliverd', 'Drivers Needed']);
interTable.appendChild(firstRow);
for (var i = 0; i < inter.hourlyData.length; i++) {

  var fancyRow = generateDataRow([inter.hourlyData[i].time, inter.hourlyData[i].pizzaSold, inter.hourlyData[i].deliveriesMade, inter.hourlyData[i].driversNeeded]);

  interTable.appendChild(fancyRow);
}
console.log('fancyRow for loop inter');

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
console.log('generatDataRow function slu');

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
console.log('generateHeadingRow function slu');

var sluTable = document.getElementById('slu');

var firstRow = generateHeadingRow(['Time', 'Pizza Sold', 'Pizza Deliverd', 'Drivers Needed']);
sluTable.appendChild(firstRow);
for (var i = 0; i < slu.hourlyData.length; i++) {

  var fancyRow = generateDataRow([slu.hourlyData[i].time, slu.hourlyData[i].pizzaSold, slu.hourlyData[i].deliveriesMade, slu.hourlyData[i].driversNeeded]);

  sluTable.appendChild(fancyRow);
}
console.log('fancyRow for loop slu');

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
console.log('generatDataRow function georg');

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
console.log('generateHeadingRow function georg');

var georgTable = document.getElementById('georg');

var firstRow = generateHeadingRow(['Time', 'Pizza Sold', 'Pizza Deliverd', 'Drivers Needed']);
georgTable.appendChild(firstRow);
for (var i = 0; i < georg.hourlyData.length; i++) {

  var fancyRow = generateDataRow([georg.hourlyData[i].time, georg.hourlyData[i].pizzaSold, georg.hourlyData[i].deliveriesMade, georg.hourlyData[i].driversNeeded]);

  georgTable.appendChild(fancyRow);
}
console.log('fancyRow for loop georg');

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
console.log('generatDataRow function rav');

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
console.log('generateHeadingRow function rav');

var ravTable = document.getElementById('rav');

var firstRow = generateHeadingRow(['Time', 'Pizza Sold', 'Pizza Deliverd', 'Drivers Needed']);
ravTable.appendChild(firstRow);
for (var i = 0; i < rav.hourlyData.length; i++) {

  var fancyRow = generateDataRow([rav.hourlyData[i].time, rav.hourlyData[i].pizzaSold, rav.hourlyData[i].deliveriesMade, rav.hourlyData[i].driversNeeded]);

  ravTable.appendChild(fancyRow);
}
console.log('fancyRow for loop rav');

console.log('end of javascript');
