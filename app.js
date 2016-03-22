console.log('java is working');
//checking to make sure jave is working

var TimeArray = [];

var timeEightAm, timeNineAm, timeTenAm, timeElevenAm, timeTwelvePm, timeOnePm, timeTwoPm, timeThreePm, timeFourPm, timeFivePm, timeSixPm, timeSevenPm, timeEightPm, timeNinePm, timeTenPm, timeElevenPm, timeTwelveAm, timeOneAm;

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

timeEightAm = {
  time: '8:00',
  PizzaSold: getRandomIntInclusive(0,4),
  DeliveryMade: getRandomIntInclusive(0,4),
};

var timeNineAm = {
  time: '9:00',
  PizzaSold: getRandomIntInclusive(0,4),
  DeliveryMade: getRandomIntInclusive(0,4),
};
var timeTenAm = {
  time: '10:00',
  PizzaSold: getRandomIntInclusive(0,4),
  DeliveryMade: getRandomIntInclusive(0,4),
};
var timeElevenAm = {
  time: '11:00',
  PizzaSold: getRandomIntInclusive(0,7),
  DeliveryMade: getRandomIntInclusive(0,4),
};
var timeTwelvePm = {
  time: '12:00',
  PizzaSold: getRandomIntInclusive(0,7),
  DeliveryMade: getRandomIntInclusive(0,4),
};
var timeOnePm = {
  time: '1:00',
  PizzaSold: getRandomIntInclusive(0,7),
  DeliveryMade: getRandomIntInclusive(0,4),
};
var timeTwoPm = {
  time: '2:00',
  PizzaSold: getRandomIntInclusive(2,15),
  DeliveryMade: getRandomIntInclusive(1,4),
};
var timeThreePm = {
  time: '3:00',
  PizzaSold: getRandomIntInclusive(2,15),
  DeliveryMade: getRandomIntInclusive(1,4),
};
var timeFourPm = {
  time: '4:00',
  PizzaSold: getRandomIntInclusive(2,15),
  DeliveryMade: getRandomIntInclusive(1,4),
};
var timeFivePm = {
  time: '5:00',
  PizzaSold: getRandomIntInclusive(15,35),
  DeliveryMade: getRandomIntInclusive(3,8),
};
var timeSixPm = {
  time: '6:00',
  PizzaSold: getRandomIntInclusive(15,35),
  DeliveryMade: getRandomIntInclusive(3,8),
};
var timeSevenPm = {
  time: '7:00',
  PizzaSold: getRandomIntInclusive(15,35),
  DeliveryMade: getRandomIntInclusive(3,8),
};
var timeEightPm = {
  time: '8:00',
  PizzaSold: getRandomIntInclusive(12,31),
  DeliveryMade: getRandomIntInclusive(5,12),
};
var timeNinePm = {
  time: '9:00',
  PizzaSold: getRandomIntInclusive(12,31),
  DeliveryMade: getRandomIntInclusive(5,12),
};
var timeTenPm = {
  time: '10:00',
  PizzaSold: getRandomIntInclusive(12,31),
  DeliveryMade: getRandomIntInclusive(5,12),
};
var timeElevenPm = {
  time: '11:00',
  PizzaSold: getRandomIntInclusive(5,20),
  DeliveryMade: getRandomIntInclusive(6,11),
};
var timeTwelveAm = {
  time: '12:00',
  PizzaSold: getRandomIntInclusive(5,20),
  DeliveryMade: getRandomIntInclusive(6,11),
};
var timeOneAm = {
  time: '1:00',
  PizzaSold: getRandomIntInclusive(5,20),
  DeliveryMade: getRandomIntInclusive(6,11),
};

var ballardStore = {
  name: 'Ballard',
  salesData: [TimeArray],
};

var firstHillStore = {
  name: 'First Hill',
  salesData: [TimeArray],
};

var interDStore = {
  name: 'Internation District',
  salesData: [TimeArray],
};

var sluStore = {
  name: 'South Lake Union',
  saleData: [TimeArray]
};
var gTownStore = {
  name: 'GeorgeTown',
  saleData: [TimeArray],
};
var ravStore = {
  name: 'Ravenna',
  saleDate: [TimeArray],
};

TimeArray.push(timeEightAm, timeNineAm, timeTenAm, timeElevenAm, timeTwelvePm, timeOnePm, timeTwoPm, timeThreePm, timeFourPm, timeFivePm, timeSixPm, timeSevenPm, timeEightPm, timeNinePm, timeTenPm, timeElevenPm, timeTwelveAm, timeOneAm);


//console.table(TimeArray);
