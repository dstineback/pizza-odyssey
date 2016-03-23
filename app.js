console.log('java is working');
//checking to make sure jave is working

var timeArray = [];
var ballardStore, firstHillStore, interDStore, sluStore, gTownStore, ravStore;
var timeEightAm, timeNineAm, timeTenAm, timeElevenAm, timeTwelvePm, timeOnePm, timeTwoPm, timeThreePm, timeFourPm, timeFivePm, timeSixPm, timeSevenPm, timeEightPm, timeNinePm, timeTenPm, timeElevenPm, timeTwelveAm, timeOneAm;
var driverNum;
var driverAns;

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  console.log('math');
};

function driverReq(driverNum) {
  driverNum = Math.ceil(DeliveryMade / 3);
  if (driverNum === 0) {
    driverAns = '[driver not recommended] ';
    console.log('no driver');
  } else {
    driverAns = '[driver recommenede' + driverNum + ' ] ';
    console.log('yes driver');
  }
  return driverAns;
};

timeEightAm = {
  time: '8:00',
  PizzaSold: getRandomIntInclusive(0,4),
  DeliveryMade: getRandomIntInclusive(0,4),

};

timeNineAm = {
  time: '9:00',
  PizzaSold: getRandomIntInclusive(0,4),
  DeliveryMade: getRandomIntInclusive(0,4),
};
timeTenAm = {
  time: '10:00',
  PizzaSold: getRandomIntInclusive(0,4),
  DeliveryMade: getRandomIntInclusive(0,4),
};
timeElevenAm = {
  time: '11:00',
  PizzaSold: getRandomIntInclusive(0,7),
  DeliveryMade: getRandomIntInclusive(0,4),
};
timeTwelvePm = {
  time: '12:00pm',
  PizzaSold: getRandomIntInclusive(0,7),
  DeliveryMade: getRandomIntInclusive(0,4),
};
timeOnePm = {
  time: '1:00pm',
  PizzaSold: getRandomIntInclusive(0,7),
  DeliveryMade: getRandomIntInclusive(0,4),
};
timeTwoPm = {
  time: '2:00pm',
  PizzaSold: getRandomIntInclusive(2,15),
  DeliveryMade: getRandomIntInclusive(1,4),
};
timeThreePm = {
  time: '3:00pm',
  PizzaSold: getRandomIntInclusive(2,15),
  DeliveryMade: getRandomIntInclusive(1,4),
};
timeFourPm = {
  time: '4:00pm',
  PizzaSold: getRandomIntInclusive(2,15),
  DeliveryMade: getRandomIntInclusive(1,4),
};
timeFivePm = {
  time: '5:00pm',
  PizzaSold: getRandomIntInclusive(15,35),
  DeliveryMade: getRandomIntInclusive(3,8),
};
timeSixPm = {
  time: '6:00pm',
  PizzaSold: getRandomIntInclusive(15,35),
  DeliveryMade: getRandomIntInclusive(3,8),
};
timeSevenPm = {
  time: '7:00pm',
  PizzaSold: getRandomIntInclusive(15,35),
  DeliveryMade: getRandomIntInclusive(3,8),
};
timeEightPm = {
  time: '8:00pm',
  PizzaSold: getRandomIntInclusive(12,31),
  DeliveryMade: getRandomIntInclusive(5,12),
};
timeNinePm = {
  time: '9:00pm',
  PizzaSold: getRandomIntInclusive(12,31),
  DeliveryMade: getRandomIntInclusive(5,12),
};
timeTenPm = {
  time: '10:00pm',
  PizzaSold: getRandomIntInclusive(12,31),
  DeliveryMade: getRandomIntInclusive(5,12),
};
timeElevenPm = {
  time: '11:00pm',
  PizzaSold: getRandomIntInclusive(5,20),
  DeliveryMade: getRandomIntInclusive(6,11),
};
timeTwelveAm = {
  time: '12:00am',
  PizzaSold: getRandomIntInclusive(5,20),
  DeliveryMade: getRandomIntInclusive(6,11),
};
timeOneAm = {
  time: '1:00am',
  PizzaSold: getRandomIntInclusive(5,20),
  DeliveryMade: getRandomIntInclusive(6,11),
};

ballardStore = {
  name: 'Ballard',
  storeHours: '8:00am to 2:00am, Tuesday - Sunday, Closed on Mondays.',
  salesData: timeArray
};

firstHillStore = {
  name: 'First Hill',
  storeHours: '8:00am to 2:00am, Tuesday - Sunday, Closed on Mondays.',
  salesData: timeArray
};

interDStore = {
  name: 'Internation District',
  storeHours: '8:00am to 2:00am, Tuesday - Sunday, Closed on Mondays.',
  salesData: timeArray
};

sluStore = {
  name: 'South Lake Union',
  storeHours: '8:00am to 2:00am, Tuesday - Sunday, Closed on Mondays.',
  salesData: timeArray
};
gTownStore = {
  name: 'GeorgeTown',
  storeHours: '8:00am to 2:00am, Tuesday - Sunday, Closed on Mondays.',
  salesData: timeArray
};
ravStore = {
  name: 'Ravenna ',
  storeHours: '8:00am to 2:00am, Tuesday - Sunday, Closed on Mondays.',
  salesData: timeArray
};

timeArray.push(timeEightAm, timeNineAm, timeTenAm, timeElevenAm, timeTwelvePm, timeOnePm, timeTwoPm, timeThreePm, timeFourPm, timeFivePm, timeSixPm, timeSevenPm, timeEightPm, timeNinePm, timeTenPm, timeElevenPm, timeTwelveAm, timeOneAm);

for (var i = 0; i < timeArray.length; i++) {
  timeArray[i];
  var liTag = document.createElement('li');
  liTag.setAttribute('id','ballard');
  liTag.textContent = ballardStore.salesData[i].time + ' pizza: ' + ballardStore.salesData[i].PizzaSold + ' deliveries:    ' + ballardStore.salesData[i].DeliveryMade + '' + driverAns;

  document.getElementById('ballard').appendChild(liTag);
  console.log('ballard loop');
};
for (var i = 0; i < timeArray.length; i++) {
  timeArray[i];
  var liTag = document.createElement('li');
  liTag.setAttribute('id','firstHill');
  liTag.textContent = firstHillStore.salesData[i].time + ' pizza: ' + firstHillStore.salesData[i].PizzaSold + ' deliveries:    ' + firstHillStore.salesData[i].DeliveryMade + '' + driverAns;

  document.getElementById('firstHill').appendChild(liTag);
  console.log('first hill loop');
};

for (var i = 0; i < timeArray.length; i++) {
  timeArray[i];
  var liTag = document.createElement('li');
  liTag.setAttribute('id','internation');
  liTag.textContent = interDStore.salesData[i].time + ' pizza: ' + interDStore.salesData[i].PizzaSold + ' deliveries:    ' + interDStore.salesData[i].DeliveryMade + '' + driverAns;

  document.getElementById('interD').appendChild(liTag);
  console.log('Internation loop');
};

for (var i = 0; i < timeArray.length; i++) {
  timeArray[i];
  var liTag = document.createElement('li');
  liTag.setAttribute('id','slu');
  liTag.textContent = sluStore.salesData[i].time + ' pizza: ' + sluStore.salesData[i].PizzaSold + ' deliveries:    ' + sluStore.salesData[i].DeliveryMade + '' + driverAns;

  document.getElementById('slu').appendChild(liTag);
  console.log('slu loop');
};
for (var i = 0; i < timeArray.length; i++) {
  timeArray[i];
  var liTag = document.createElement('li');
  liTag.setAttribute('id','gTown');
  liTag.textContent = gTownStore.salesData[i].time + ' pizza: ' + gTownStore.salesData[i].PizzaSold + ' deliveries:    ' + gTownStore.salesData[i].DeliveryMade + '' + driverAns;

  document.getElementById('gTown').appendChild(liTag);
  console.log('gTown loop');
};
for (var i = 0; i < timeArray.length; i++) {
  timeArray[i];
  var liTag = document.createElement('li');
  liTag.setAttribute('id','rav');
  liTag.textContent = ravStore.salesData[i].time + ' pizza: ' + ravStore.salesData[i].PizzaSold + ' deliveries:    ' + ravStore.salesData[i].DeliveryMade + '' + driverAns;

  document.getElementById('rav').appendChild(liTag);
  console.log('rav loop');
};
