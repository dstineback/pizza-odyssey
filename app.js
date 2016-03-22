console.log('java is working');
//checking to make sure jave is working

var timeArray = [];
var ballardStore, firstHillStore, interDStore, sluStore, gTownStore, ravStore;
var timeEightAm, timeNineAm, timeTenAm, timeElevenAm, timeTwelvePm, timeOnePm, timeTwoPm, timeThreePm, timeFourPm, timeFivePm, timeSixPm, timeSevenPm, timeEightPm, timeNinePm, timeTenPm, timeElevenPm, timeTwelveAm, timeOneAm;
var driverNum;

timeArray.push(timeEightAm, timeNineAm, timeTenAm, timeElevenAm, timeTwelvePm, timeOnePm, timeTwoPm, timeThreePm, timeFourPm, timeFivePm, timeSixPm, timeSevenPm, timeEightPm, timeNinePm, timeTenPm, timeElevenPm, timeTwelveAm, timeOneAm);

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var driverAns;
function driverReq(driverNum) {
  driverNum = Math.ceil(DeliveryMade / 3);
  if (driverNum === 0) {
    driverAns = '[driver not recommended] ';
  } else {
    driverAns = '[driver recommenede' + driverNum + ' ] ';
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
  time: '12:00',
  PizzaSold: getRandomIntInclusive(0,7),
  DeliveryMade: getRandomIntInclusive(0,4),
};
timeOnePm = {
  time: '1:00',
  PizzaSold: getRandomIntInclusive(0,7),
  DeliveryMade: getRandomIntInclusive(0,4),
};
timeTwoPm = {
  time: '2:00',
  PizzaSold: getRandomIntInclusive(2,15),
  DeliveryMade: getRandomIntInclusive(1,4),
};
timeThreePm = {
  time: '3:00',
  PizzaSold: getRandomIntInclusive(2,15),
  DeliveryMade: getRandomIntInclusive(1,4),
};
timeFourPm = {
  time: '4:00',
  PizzaSold: getRandomIntInclusive(2,15),
  DeliveryMade: getRandomIntInclusive(1,4),
};
timeFivePm = {
  time: '5:00',
  PizzaSold: getRandomIntInclusive(15,35),
  DeliveryMade: getRandomIntInclusive(3,8),
};
timeSixPm = {
  time: '6:00',
  PizzaSold: getRandomIntInclusive(15,35),
  DeliveryMade: getRandomIntInclusive(3,8),
};
timeSevenPm = {
  time: '7:00',
  PizzaSold: getRandomIntInclusive(15,35),
  DeliveryMade: getRandomIntInclusive(3,8),
};
timeEightPm = {
  time: '8:00',
  PizzaSold: getRandomIntInclusive(12,31),
  DeliveryMade: getRandomIntInclusive(5,12),
};
timeNinePm = {
  time: '9:00',
  PizzaSold: getRandomIntInclusive(12,31),
  DeliveryMade: getRandomIntInclusive(5,12),
};
timeTenPm = {
  time: '10:00',
  PizzaSold: getRandomIntInclusive(12,31),
  DeliveryMade: getRandomIntInclusive(5,12),
};
timeElevenPm = {
  time: '11:00',
  PizzaSold: getRandomIntInclusive(5,20),
  DeliveryMade: getRandomIntInclusive(6,11),
};
timeTwelveAm = {
  time: '12:00',
  PizzaSold: getRandomIntInclusive(5,20),
  DeliveryMade: getRandomIntInclusive(6,11),
};
timeOneAm = {
  time: '1:00',
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

var liTag = document.createElement('li');

liTag.setAttribute('id','ballard');

liTag.textContent = ballardStore.salesData[0].time + '' + ballardStore.salesData[0].PizzaSold + ' pizza ' + ballardStore.salesData[0].DeliveryMade + ' deliveries ' + driverAns;

document.getElementById('ballard').appendChild(liTag);
