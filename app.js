console.log('java is working');
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function PizzaLocation(name) {
  this.name = name;
  this.hourlyData = [];
}

PizzaLocation.prototype.pushHourlyData = function(data) {
  this.hourlyData.push(data);
};
function hourlyData(time, minPizzaSold, maxPizzaSold, minDeliveriesMade, maxDelieveries) {
  this.time = time;
  this.pizzaSold = getRandomIntInclusive(minPizzaSold, maxPizzaSold);
  this.deliveriesMade = getRandomIntInclusive(minDeliveriesMade, maxDelieveries);
  this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
}

var ballard = new PizzaLocation('ballard');
ballard.pushHourlyData(new hourlyData('8:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new hourlyData('9:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new hourlyData('10:00 am', 0, 3, 1, 7));
ballard.pushHourlyData(new hourlyData('11:00 am', 5, 10, 2, 8));
ballard.pushHourlyData(new hourlyData('Noon ', 5, 10, 2, 8));
ballard.pushHourlyData(new hourlyData('1:00 pm', 5, 10, 2, 8));
ballard.pushHourlyData(new hourlyData('2:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new hourlyData('3:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new hourlyData('4:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new hourlyData('5:00 pm', 2, 13, 1, 7));
ballard.pushHourlyData(new hourlyData('6:00 pm', 0, 15, 2, 9));
ballard.pushHourlyData(new hourlyData('7:00 pm', 0, 15, 2, 9));
ballard.pushHourlyData(new hourlyData('8:00 pm', 1, 3, 4, 12));
ballard.pushHourlyData(new hourlyData('9:00 pm', 1, 3, 4, 12));
ballard.pushHourlyData(new hourlyData('10:00 pm', 1, 3, 4, 12));
ballard.pushHourlyData(new hourlyData('11:00 pm', 8, 15, 6, 16));
ballard.pushHourlyData(new hourlyData('Midnight', 8, 15, 6, 16));
ballard.pushHourlyData(new hourlyData('1:00 am', 8, 15, 6, 16));

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


// var hourData;
// for (var i = 0; i < ballard.hourlyData.length; i++) {
//   hourData = ballard.hourlyData[i];
//   hourData.time;
//   console.log('hourData time');
//   hourData.pizzaSold;
//   console.log('hourData pizzaSold');
//   hourData.deliveriesMade;
//   console.log('hourData deliveriesMade');
//   hourData.driversNeeded;
//   console.log('hour driversNeeded');
//
// }

var ballardTable = document.createElement('table');

var firstRow = generateHeadingRow(['Time', 'Pizza Sold', 'Pizza Deliverd', 'Drivers Needed']);

var secondRow = generateDataRow([ballard.hourlyData[0].time, ballard.hourlyData[0].pizzaSold, ballard.hourlyData[0].deliveriesMade, ballard.hourlyData[0].driversNeeded]);
var thirdRow = generateDataRow([ballard.hourlyData[1].time, ballard.hourlyData[1].pizzaSold, ballard.hourlyData[1].deliveriesMade, ballard.hourlyData[1].driversNeeded]);
var fourthRow = generateDataRow([ballard.hourlyData[2].time, ballard.hourlyData[2].pizzaSold, ballard.hourlyData[2].deliveriesMade, ballard.hourlyData[2].driversNeeded]);
var fifthRow = generateDataRow([ballard.hourlyData[3].time, ballard.hourlyData[3].pizzaSold, ballard.hourlyData[3].deliveriesMade, ballard.hourlyData[3].driversNeeded]);
var sixthRow = generateDataRow([ballard.hourlyData[3].time, ballard.hourlyData[3].pizzaSold, ballard.hourlyData[3].deliveriesMade, ballard.hourlyData[3].driversNeeded]);
var seventhRow = generateDataRow([ballard.hourlyData[4].time, ballard.hourlyData[4].pizzaSold, ballard.hourlyData[4].deliveriesMade, ballard.hourlyData[4].driversNeeded]);
var eighthRow = generateDataRow([ballard.hourlyData[5].time, ballard.hourlyData[5].pizzaSold, ballard.hourlyData[5].deliveriesMade, ballard.hourlyData[5].driversNeeded]);
var ninthRow = generateDataRow([ballard.hourlyData[6].time, ballard.hourlyData[6].pizzaSold, ballard.hourlyData[6].deliveriesMade, ballard.hourlyData[6].driversNeeded]);
var tenthRow = generateDataRow([ballard.hourlyData[7].time, ballard.hourlyData[7].pizzaSold, ballard.hourlyData[7].deliveriesMade, ballard.hourlyData[7].driversNeeded]);
var elevnthRow = generateDataRow([ballard.hourlyData[8].time, ballard.hourlyData[8].pizzaSold, ballard.hourlyData[8].deliveriesMade, ballard.hourlyData[8].driversNeeded]);
var twelveRow = generateDataRow([ballard.hourlyData[9].time, ballard.hourlyData[9].pizzaSold, ballard.hourlyData[9].deliveriesMade, ballard.hourlyData[9].driversNeeded]);
var thirteenRow = generateDataRow([ballard.hourlyData[10].time, ballard.hourlyData[10].pizzaSold, ballard.hourlyData[10].deliveriesMade, ballard.hourlyData[10].driversNeeded]);
var fourteenRow = generateDataRow([ballard.hourlyData[11].time, ballard.hourlyData[11].pizzaSold, ballard.hourlyData[11].deliveriesMade, ballard.hourlyData[11].driversNeeded]);
var fiveteenRow = generateDataRow([ballard.hourlyData[12].time, ballard.hourlyData[12].pizzaSold, ballard.hourlyData[12].deliveriesMade, ballard.hourlyData[12].driversNeeded]);
var sixteenRow = generateDataRow([ballard.hourlyData[13].time, ballard.hourlyData[13].pizzaSold, ballard.hourlyData[13].deliveriesMade, ballard.hourlyData[13].driversNeeded]);
var seventeenRow = generateDataRow([ballard.hourlyData[14].time, ballard.hourlyData[14].pizzaSold, ballard.hourlyData[14].deliveriesMade, ballard.hourlyData[14].driversNeeded]);
var eightteenRow = generateDataRow([ballard.hourlyData[15].time, ballard.hourlyData[15].pizzaSold, ballard.hourlyData[15].deliveriesMade, ballard.hourlyData[15].driversNeeded]);
var nineteenRow = generateDataRow([ballard.hourlyData[16].time, ballard.hourlyData[16].pizzaSold, ballard.hourlyData[16].deliveriesMade, ballard.hourlyData[16].driversNeeded]);
var twentyRow = generateDataRow([ballard.hourlyData[17].time, ballard.hourlyData[17].pizzaSold, ballard.hourlyData[17].deliveriesMade, ballard.hourlyData[17].driversNeeded]);


ballardTable.appendChild(firstRow);
ballardTable.appendChild(secondRow);
ballardTable.appendChild(thirdRow);
ballardTable.appendChild(fourthRow);
ballardTable.appendChild(fifthRow);
ballardTable.appendChild(sixthRow);
ballardTable.appendChild(seventhRow);
ballardTable.appendChild(eighthRow);
ballardTable.appendChild(ninthRow);
ballardTable.appendChild(tenthRow);
ballardTable.appendChild(elevnthRow);
ballardTable.appendChild(twelveRow);
ballardTable.appendChild(thirteenRow);
ballardTable.appendChild(fourteenRow);
ballardTable.appendChild(fiveteenRow);
ballardTable.appendChild(sixteenRow);
ballardTable.appendChild(seventeenRow);
ballardTable.appendChild(eightteenRow);
ballardTable.appendChild(nineteenRow);
ballardTable.appendChild(twentyRow);

document.getElementById('ballard').appendChild(ballardTable);





//checking to make sure jave is working

// var timeArray = [];
// var ballardStore, firstHillStore, interDStore, sluStore, gTownStore, ravStore;
// var timeEightAm, timeNineAm, timeTenAm, timeElevenAm, timeTwelvePm, timeOnePm, timeTwoPm, timeThreePm, timeFourPm, timeFivePm, timeSixPm, timeSevenPm, timeEightPm, timeNinePm, timeTenPm, timeElevenPm, timeTwelveAm, timeOneAm;
// var driverNum;
// var driverAns;
//
// function getRandomIntInclusive(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
//   console.log('math');
// };
//
// function driverReq(driverNum) {
//   driverNum = Math.ceil(DeliveryMade / 3);
//   if (driverNum === 0) {
//     driverAns = '[driver not recommended] ';
//     console.log('no driver');
//   } else {
//     driverAns = '[driver recommenede' + driverNum + ' ] ';
//     console.log('yes driver');
//   }
//   return driverAns;
// };
//
//
// timeEightAm = {
//   time: '8:00',
//   PizzaSold: getRandomIntInclusive(0,4),
//   DeliveryMade: getRandomIntInclusive(0,4),
//
// };
//
// timeNineAm = {
//   time: '9:00',
//   PizzaSold: getRandomIntInclusive(0,4),
//   DeliveryMade: getRandomIntInclusive(0,4),
// };
// timeTenAm = {
//   time: '10:00',
//   PizzaSold: getRandomIntInclusive(0,4),
//   DeliveryMade: getRandomIntInclusive(0,4),
// };
// timeElevenAm = {
//   time: '11:00',
//   PizzaSold: getRandomIntInclusive(0,7),
//   DeliveryMade: getRandomIntInclusive(0,4),
// };
// timeTwelvePm = {
//   time: '12:00pm',
//   PizzaSold: getRandomIntInclusive(0,7),
//   DeliveryMade: getRandomIntInclusive(0,4),
// };
// timeOnePm = {
//   time: '1:00pm',
//   PizzaSold: getRandomIntInclusive(0,7),
//   DeliveryMade: getRandomIntInclusive(0,4),
// };
// timeTwoPm = {
//   time: '2:00pm',
//   PizzaSold: getRandomIntInclusive(2,15),
//   DeliveryMade: getRandomIntInclusive(1,4),
// };
// timeThreePm = {
//   time: '3:00pm',
//   PizzaSold: getRandomIntInclusive(2,15),
//   DeliveryMade: getRandomIntInclusive(1,4),
// };
// timeFourPm = {
//   time: '4:00pm',
//   PizzaSold: getRandomIntInclusive(2,15),
//   DeliveryMade: getRandomIntInclusive(1,4),
// };
// timeFivePm = {
//   time: '5:00pm',
//   PizzaSold: getRandomIntInclusive(15,35),
//   DeliveryMade: getRandomIntInclusive(3,8),
// };
// timeSixPm = {
//   time: '6:00pm',
//   PizzaSold: getRandomIntInclusive(15,35),
//   DeliveryMade: getRandomIntInclusive(3,8),
// };
// timeSevenPm = {
//   time: '7:00pm',
//   PizzaSold: getRandomIntInclusive(15,35),
//   DeliveryMade: getRandomIntInclusive(3,8),
// };
// timeEightPm = {
//   time: '8:00pm',
//   PizzaSold: getRandomIntInclusive(12,31),
//   DeliveryMade: getRandomIntInclusive(5,12),
// };
// timeNinePm = {
//   time: '9:00pm',
//   PizzaSold: getRandomIntInclusive(12,31),
//   DeliveryMade: getRandomIntInclusive(5,12),
// };
// timeTenPm = {
//   time: '10:00pm',
//   PizzaSold: getRandomIntInclusive(12,31),
//   DeliveryMade: getRandomIntInclusive(5,12),
// };
// timeElevenPm = {
//   time: '11:00pm',
//   PizzaSold: getRandomIntInclusive(5,20),
//   DeliveryMade: getRandomIntInclusive(6,11),
// };
// timeTwelveAm = {
//   time: '12:00am',
//   PizzaSold: getRandomIntInclusive(5,20),
//   DeliveryMade: getRandomIntInclusive(6,11),
// };
// timeOneAm = {
//   time: '1:00am',
//   PizzaSold: getRandomIntInclusive(5,20),
//   DeliveryMade: getRandomIntInclusive(6,11),
// };
//
// ballardStore = {
//   name: 'Ballard',
//   storeHours: '8:00am to 2:00am, Tuesday - Sunday, Closed on Mondays.',
//   salesData: timeArray
// };
//
// firstHillStore = {
//   name: 'First Hill',
//   storeHours: '8:00am to 2:00am, Tuesday - Sunday, Closed on Mondays.',
//   salesData: timeArray
// };
//
// interDStore = {
//   name: 'Internation District',
//   storeHours: '8:00am to 2:00am, Tuesday - Sunday, Closed on Mondays.',
//   salesData: timeArray
// };
//
// sluStore = {
//   name: 'South Lake Union',
//   storeHours: '8:00am to 2:00am, Tuesday - Sunday, Closed on Mondays.',
//   salesData: timeArray
// };
// gTownStore = {
//   name: 'GeorgeTown',
//   storeHours: '8:00am to 2:00am, Tuesday - Sunday, Closed on Mondays.',
//   salesData: timeArray
// };
// ravStore = {
//   name: 'Ravenna ',
//   storeHours: '8:00am to 2:00am, Tuesday - Sunday, Closed on Mondays.',
//   salesData: timeArray
// };
//
// timeArray.push(timeEightAm, timeNineAm, timeTenAm, timeElevenAm, timeTwelvePm, timeOnePm, timeTwoPm, timeThreePm, timeFourPm, timeFivePm, timeSixPm, timeSevenPm, timeEightPm, timeNinePm, timeTenPm, timeElevenPm, timeTwelveAm, timeOneAm);
//
// for (var i = 0; i < timeArray.length; i++) {
//   timeArray[i];
//   var liTag = document.createElement('li');
//   liTag.setAttribute('id','ballard');
//   liTag.textContent = ballardStore.salesData[i].time + ' pizza: ' + ballardStore.salesData[i].PizzaSold + ' deliveries:    ' + ballardStore.salesData[i].DeliveryMade + '' + driverAns;
//
//   document.getElementById('ballard').appendChild(liTag);
//   console.log('ballard loop');
// };
// for (var i = 0; i < timeArray.length; i++) {
//   timeArray[i];
//   var liTag = document.createElement('li');
//   liTag.setAttribute('id','firstHill');
//   liTag.textContent = firstHillStore.salesData[i].time + ' pizza: ' + firstHillStore.salesData[i].PizzaSold + ' deliveries:    ' + firstHillStore.salesData[i].DeliveryMade + '' + driverAns;
//
//   document.getElementById('firstHill').appendChild(liTag);
//   console.log('first hill loop');
// };
//
// for (var i = 0; i < timeArray.length; i++) {
//   timeArray[i];
//   var liTag = document.createElement('li');
//   liTag.setAttribute('id','internation');
//   liTag.textContent = interDStore.salesData[i].time + ' pizza: ' + interDStore.salesData[i].PizzaSold + ' deliveries:    ' + interDStore.salesData[i].DeliveryMade + '' + driverAns;
//
//   document.getElementById('interD').appendChild(liTag);
//   console.log('Internation loop');
// };
//
// for (var i = 0; i < timeArray.length; i++) {
//   timeArray[i];
//   var liTag = document.createElement('li');
//   liTag.setAttribute('id','slu');
//   liTag.textContent = sluStore.salesData[i].time + ' pizza: ' + sluStore.salesData[i].PizzaSold + ' deliveries:    ' + sluStore.salesData[i].DeliveryMade + '' + driverAns;
//
//   document.getElementById('slu').appendChild(liTag);
//   console.log('slu loop');
// };
// for (var i = 0; i < timeArray.length; i++) {
//   timeArray[i];
//   var liTag = document.createElement('li');
//   liTag.setAttribute('id','gTown');
//   liTag.textContent = gTownStore.salesData[i].time + ' pizza: ' + gTownStore.salesData[i].PizzaSold + ' deliveries:    ' + gTownStore.salesData[i].DeliveryMade + '' + driverAns;
//
//   document.getElementById('gTown').appendChild(liTag);
//   console.log('gTown loop');
// };
// for (var i = 0; i < timeArray.length; i++) {
//   timeArray[i];
//   var liTag = document.createElement('li');
//   liTag.setAttribute('id','rav');
//   liTag.textContent = ravStore.salesData[i].time + ' pizza: ' + ravStore.salesData[i].PizzaSold + ' deliveries:    ' + ravStore.salesData[i].DeliveryMade + '' + driverAns;
//
//   document.getElementById('rav').appendChild(liTag);
//   console.log('rav loop');
// };
