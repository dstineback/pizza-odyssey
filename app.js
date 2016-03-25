
console.log('javascript is working');

function collectNewStore(event) {
  event.preventDefault();
  console.log('event target', collectNewStore);

  var createStoreTable = document.getElementById('newStoreTable');
  console.log('new store table');

// All the form input in variables
  var storeName = event.target.storeName.value;
  var hours8am = event.target.hours8am.value;
  var minPizza8am = event.target.minPizza8am.value;
  var maxPizza8am = event.target.maxPizza8am.value;
  var minDelivery8am = event.target.minDelivery8am.value;
  var maxDelivery8am = event.target.maxDelivery8am.value;

// The Dom directions for each variable

  var timeRow = document.createElement('tr');

  var storeNameColumn = document.createElement('td');
  storeNameColumn.textContent = storeName;
  timeRow.appendChild(storeNameColumn);
  createStoreTable.appendChild(timeRow);

  var hourColumn = document.createElement('td');
  hourColumn.textContent = hours8am;
  timeRow.appendChild(hourColumn);
  createStoreTable.appendChild(timeRow);

  var minPizzaColumn = document.createElement('td');
  minPizzaColumn.textContent = minPizza8am;
  timeRow.appendChild(minPizzaColumn);
  createStoreTable.appendChild(timeRow);

  var maxPizzaColumn = document.createElement('td');
  maxPizzaColumn.textContent = maxPizza8am;
  timeRow.appendChild(maxPizzaColumn);
  createStoreTable.appendChild(timeRow);

  var minDeliveryColumn = document.createElement('td');
  minDeliveryColumn.textContent = minDelivery8am;
  timeRow.appendChild(minDeliveryColumn);
  createStoreTable.appendChild(timeRow);

  var maxDeliveryColumn = document.createElement('td');
  maxDeliveryColumn.textContent = maxDelivery8am;
  timeRow.appendChild(maxDeliveryColumn);
  createStoreTable.appendChild(timeRow);

  //


//  var hours9am = event.target.hours9am.value;
  var minPizza9am = event.target.minPizza9am.value;
  var maxPizza9am = event.target.maxPizza9am.value;
  var minDelivery9am = event.target.minDelivery9am.value;
  var maxDelivery9am = event.target.maxDelivery9am.value;

// The Dom directions for each variable

  var timeRow9am = document.createElement('tr');

// //  var storeNameColumn9am = document.createElement('td');
//   storeNameColumn9am.textContent = storeNameColumn;
//   timeRow9am.appendChild(storeNameColumn9am);
//   createStoreTable.appendChild(timeRow9am);

  var hourColumn9am = document.createElement('td');
  hourColumn9am.textContent = hours9am;
  timeRow9am.appendChild(hourColumn9am);
  createStoreTable.appendChild(timeRow9am);

  var minPizzaColumn9am = document.createElement('td');
  minPizzaColumn9am.textContent = minPizza9am;
  timeRow9am.appendChild(minPizzaColumn9am);
  createStoreTable.appendChild(timeRow9am);

  var maxPizzaColumn9am = document.createElement('td');
  maxPizzaColumn9am.textContent = maxPizza9am;
  timeRow9am.appendChild(maxPizzaColumn9am);
  createStoreTable.appendChild(timeRow9am);

  var minDeliveryColumn9am = document.createElement('td');
  minDeliveryColumn9am.textContent = minDelivery9am;
  timeRow9am.appendChild(minDeliveryColumn9am);
  createStoreTable.appendChild(timeRow9am);

  var maxDeliveryColumn9am = document.createElement('td');
  maxDeliveryColumn9am.textContent = maxDelivery9am;
  timeRow9am.appendChild(maxDeliveryColumn9am);
  createStoreTable.appendChild(timeRow9am);

//

  var hours10am = event.target.hours10am.value;
  var minPizza10am = event.target.minPizza10am.value;
  var maxPizza10am = event.target.maxPizza10am.value;
  var minDelivery10am = event.target.minDelivery10am.value;
  var maxDelivery10am = event.target.maxDelivery10am.value;

  var timeRow10am = document.createElement('tr');

  var storeNameColumn10am = document.createElement('td');
  storeNameColumn10am.textContent = storeNameColumn;
  timeRow10am.appendChild(storeNameColumn10am);
  createStoreTable.appendChild(timeRow10am);

  var hourColumn10am = document.createElement('td');
  hourColumn10am.textContent = hours10am;
  timeRow10am.appendChild(hourColumn10am);
  createStoreTable.appendChild(timeRow10am);

  var minPizzaColumn10am = document.createElement('td');
  minPizzaColumn10am.textContent = minPizza10am;
  timeRow10am.appendChild(minPizzaColumn10am);
  createStoreTable.appendChild(timeRow10am);

  var maxPizzaColumn10am = document.createElement('td');
  maxPizzaColumn10am.textContent = maxPizza10am;
  timeRow10am.appendChild(maxPizzaColumn10am);
  createStoreTable.appendChild(timeRow10am);

  var minDeliveryColumn10am = document.createElement('td');
  minDeliveryColumn10am.textContent = minDelivery10am;
  timeRow10am.appendChild(minDeliveryColumn10am);
  createStoreTable.appendChild(timeRow10am);

  var maxDeliveryColumn10am = document.createElement('td');
  maxDeliveryColumn10am.textContent = maxDelivery10am;
  timeRow10am.appendChild(maxDeliveryColumn10am);
  createStoreTable.appendChild(timeRow10am);

  var hours11am = event.target.hours11am.value;
  var minPizza11am = event.target.minPizza11am.value;
  var maxPizza11am = event.target.maxPizza11am.value;
  var minDelivery11am = event.target.minDelivery11am.value;
  var maxDelivery11am = event.target.maxDelivery11am.value;

// The Dom directions for each variable

  var timeRow11am = document.createElement('tr');

  var storeNameColumn11am = document.createElement('td');
  storeNameColumn11am.textContent = storeNameColumn;
  timeRow11am.appendChild(storeNameColumn11am);
  createStoreTable.appendChild(timeRow11am);

  var hourColumn11am = document.createElement('td');
  hourColumn11am.textContent = hours11am;
  timeRow11am.appendChild(hourColumn11am);
  createStoreTable.appendChild(timeRow11am);

  var minPizzaColumn11am = document.createElement('td');
  minPizzaColumn11am.textContent = minPizza11am;
  timeRow11am.appendChild(minPizzaColumn11am);
  createStoreTable.appendChild(timeRow11am);

  var maxPizzaColumn11am = document.createElement('td');
  maxPizzaColumn11am.textContent = maxPizza11am;
  timeRow11am.appendChild(maxPizzaColumn11am);
  createStoreTable.appendChild(timeRow11am);

  var minDeliveryColumn11am = document.createElement('td');
  minDeliveryColumn11am.textContent = minDelivery11am;
  timeRow11am.appendChild(minDeliveryColumn11am);
  createStoreTable.appendChild(timeRow11am);

  var maxDeliveryColumn11am = document.createElement('td');
  maxDeliveryColumn11am.textContent = maxDelivery11am;
  timeRow11am.appendChild(maxDeliveryColumn11am);
  createStoreTable.appendChild(timeRow11am);

  var hoursNoon = event.target.hoursNoon.value;
  var minPizzaNoon = event.target.minPizzaNoon.value;
  var maxPizzaNoon = event.target.maxPizzaNoon.value;
  var minDeliveryNoon = event.target.minDeliveryNoon.value;
  var maxDeliveryNoon = event.target.maxDeliveryNoon.value;

// The Dom directions for each variable

  var timeRowNoon = document.createElement('tr');

  var storeNameColumnNoon = document.createElement('td');
  storeNameColumnNoon.textContent = storeNameColumn;
  timeRowNoon.appendChild(storeNameColumnNoon);
  createStoreTable.appendChild(timeRowNoon);

  var hourColumnNoon = document.createElement('td');
  hourColumnNoon.textContent = hoursNoon;
  timeRowNoon.appendChild(hourColumnNoon);
  createStoreTable.appendChild(timeRowNoon);

  var minPizzaColumnNoon = document.createElement('td');
  minPizzaColumnNoon.textContent = minPizzaNoon;
  timeRowNoon.appendChild(minPizzaColumnNoon);
  createStoreTable.appendChild(timeRowNoon);

  var maxPizzaColumnNoon = document.createElement('td');
  maxPizzaColumnNoon.textContent = maxPizzaNoon;
  timeRowNoon.appendChild(maxPizzaColumnNoon);
  createStoreTable.appendChild(timeRowNoon);

  var minDeliveryColumnNoon = document.createElement('td');
  minDeliveryColumnNoon.textContent = minDeliveryNoon;
  timeRowNoon.appendChild(minDeliveryColumnNoon);
  createStoreTable.appendChild(timeRowNoon);

  var maxDeliveryColumnNoon = document.createElement('td');
  maxDeliveryColumnNoon.textContent = maxDeliveryNoon;
  timeRowNoon.appendChild(maxDeliveryColumnNoon);
  createStoreTable.appendChild(timeRowNoon);

  var hours1pm = event.target.hours1pm.value;
  var minPizza1pm = event.target.minPizza1pm.value;
  var maxPizza1pm = event.target.maxPizza1pm.value;
  var minDelivery1pm = event.target.minDelivery1pm.value;
  var maxDelivery1pm = event.target.maxDelivery1pm.value;

// The Dom directions for each variable

  var timeRow1pm = document.createElement('tr');

  var storeNameColumn1pm = document.createElement('td');
  storeNameColumn1pm.textContent = storeNameColumn;
  timeRow1pm.appendChild(storeNameColumn1pm);
  createStoreTable.appendChild(timeRow1pm);

  var hourColumn1pm = document.createElement('td');
  hourColumn1pm.textContent = hours1pm;
  timeRow1pm.appendChild(hourColumn1pm);
  createStoreTable.appendChild(timeRow1pm);

  var minPizzaColumn1pm = document.createElement('td');
  minPizzaColumn1pm.textContent = minPizza1pm;
  timeRow1pm.appendChild(minPizzaColumn1pm);
  createStoreTable.appendChild(timeRow1pm);

  var maxPizzaColumn1pm = document.createElement('td');
  maxPizzaColumn1pm.textContent = maxPizza1pm;
  timeRow1pm.appendChild(maxPizzaColumn1pm);
  createStoreTable.appendChild(timeRow1pm);

  var minDeliveryColumn1pm = document.createElement('td');
  minDeliveryColumn1pm.textContent = minDelivery1pm;
  timeRow1pm.appendChild(minDeliveryColumn1pm);
  createStoreTable.appendChild(timeRow1pm);

  var maxDeliveryColumn1pm = document.createElement('td');
  maxDeliveryColumn1pm.textContent = maxDelivery1pm;
  timeRow1pm.appendChild(maxDeliveryColumn1pm);
  createStoreTable.appendChild(timeRow1pm);

  var hours2pm = event.target.hours2pm.value;
  var minPizza2pm = event.target.minPizza2pm.value;
  var maxPizza2pm = event.target.maxPizza2pm.value;
  var minDelivery2pm = event.target.minDelivery2pm.value;
  var maxDelivery2pm = event.target.maxDelivery2pm.value;

// The Dom directions for each variable

  var timeRow2pm = document.createElement('tr');

  var storeNameColumn2pm = document.createElement('td');
  storeNameColumn2pm.textContent = storeNameColumn;
  timeRow2pm.appendChild(storeNameColumn2pm);
  createStoreTable.appendChild(timeRow2pm);

  var hourColumn2pm = document.createElement('td');
  hourColumn2pm.textContent = hours2pm;
  timeRow2pm.appendChild(hourColumn2pm);
  createStoreTable.appendChild(timeRow2pm);

  var minPizzaColumn2pm = document.createElement('td');
  minPizzaColumn2pm.textContent = minPizza2pm;
  timeRow2pm.appendChild(minPizzaColumn2pm);
  createStoreTable.appendChild(timeRow2pm);

  var maxPizzaColumn2pm = document.createElement('td');
  maxPizzaColumn2pm.textContent = maxPizza2pm;
  timeRow2pm.appendChild(maxPizzaColumn2pm);
  createStoreTable.appendChild(timeRow2pm);

  var minDeliveryColumn2pm = document.createElement('td');
  minDeliveryColumn2pm.textContent = minDelivery2pm;
  timeRow2pm.appendChild(minDeliveryColumn2pm);
  createStoreTable.appendChild(timeRow2pm);

  var maxDeliveryColumn2pm = document.createElement('td');
  maxDeliveryColumn2pm.textContent = maxDelivery2pm;
  timeRow2pm.appendChild(maxDeliveryColumn2pm);
  createStoreTable.appendChild(timeRow2pm);

  var hours3pm = event.target.hours3pm.value;
  var minPizza3pm = event.target.minPizza3pm.value;
  var maxPizza3pm = event.target.maxPizza3pm.value;
  var minDelivery3pm = event.target.minDelivery3pm.value;
  var maxDelivery3pm = event.target.maxDelivery3pm.value;

// The Dom directions for each variable

  var timeRow3pm = document.createElement('tr');

  var storeNameColumn3pm = document.createElement('td');
  storeNameColumn3pm.textContent = storeNameColumn;
  timeRow3pm.appendChild(storeNameColumn3pm);
  createStoreTable.appendChild(timeRow3pm);

  var hourColumn3pm = document.createElement('td');
  hourColumn3pm.textContent = hours3pm;
  timeRow3pm.appendChild(hourColumn3pm);
  createStoreTable.appendChild(timeRow3pm);

  var minPizzaColumn3pm = document.createElement('td');
  minPizzaColumn3pm.textContent = minPizza3pm;
  timeRow3pm.appendChild(minPizzaColumn3pm);
  createStoreTable.appendChild(timeRow3pm);

  var maxPizzaColumn3pm = document.createElement('td');
  maxPizzaColumn3pm.textContent = maxPizza3pm;
  timeRow3pm.appendChild(maxPizzaColumn3pm);
  createStoreTable.appendChild(timeRow3pm);

  var minDeliveryColumn3pm = document.createElement('td');
  minDeliveryColumn3pm.textContent = minDelivery3pm;
  timeRow3pm.appendChild(minDeliveryColumn3pm);
  createStoreTable.appendChild(timeRow3pm);

  var maxDeliveryColumn3pm = document.createElement('td');
  maxDeliveryColumn3pm.textContent = maxDelivery3pm;
  timeRow3pm.appendChild(maxDeliveryColumn3pm);
  createStoreTable.appendChild(timeRow3pm);

  var hours4pm = event.target.hours4pm.value;
  var minPizza4pm = event.target.minPizza4pm.value;
  var maxPizza4pm = event.target.maxPizza4pm.value;
  var minDelivery4pm = event.target.minDelivery4pm.value;
  var maxDelivery4pm = event.target.maxDelivery4pm.value;

// The Dom directions for each variable

  var timeRow4pm = document.createElement('tr');

  var storeNameColumn4pm = document.createElement('td');
  storeNameColumn4pm.textContent = storeNameColumn;
  timeRow4pm.appendChild(storeNameColumn4pm);
  createStoreTable.appendChild(timeRow4pm);

  var hourColumn4pm = document.createElement('td');
  hourColumn4pm.textContent = hours4pm;
  timeRow4pm.appendChild(hourColumn4pm);
  createStoreTable.appendChild(timeRow4pm);

  var minPizzaColumn4pm = document.createElement('td');
  minPizzaColumn4pm.textContent = minPizza4pm;
  timeRow4pm.appendChild(minPizzaColumn4pm);
  createStoreTable.appendChild(timeRow4pm);

  var maxPizzaColumn4pm = document.createElement('td');
  maxPizzaColumn4pm.textContent = maxPizza4pm;
  timeRow4pm.appendChild(maxPizzaColumn4pm);
  createStoreTable.appendChild(timeRow4pm);

  var minDeliveryColumn4pm = document.createElement('td');
  minDeliveryColumn4pm.textContent = minDelivery4pm;
  timeRow4pm.appendChild(minDeliveryColumn4pm);
  createStoreTable.appendChild(timeRow4pm);

  var maxDeliveryColumn4pm = document.createElement('td');
  maxDeliveryColumn4pm.textContent = maxDelivery4pm;
  timeRow4pm.appendChild(maxDeliveryColumn4pm);
  createStoreTable.appendChild(timeRow4pm);

  var hours4pm = event.target.hours4pm.value;
  var minPizza4pm = event.target.minPizza4pm.value;
  var maxPizza4pm = event.target.maxPizza4pm.value;
  var minDelivery4pm = event.target.minDelivery4pm.value;
  var maxDelivery4pm = event.target.maxDelivery4pm.value;

// The Dom directions for each variable

  var timeRow4pm = document.createElement('tr');

  var storeNameColumn4pm = document.createElement('td');
  storeNameColumn4pm.textContent = storeNameColumn;
  timeRow4pm.appendChild(storeNameColumn4pm);
  createStoreTable.appendChild(timeRow4pm);

  var hourColumn4pm = document.createElement('td');
  hourColumn4pm.textContent = hours4pm;
  timeRow4pm.appendChild(hourColumn4pm);
  createStoreTable.appendChild(timeRow4pm);

  var minPizzaColumn4pm = document.createElement('td');
  minPizzaColumn4pm.textContent = minPizza4pm;
  timeRow4pm.appendChild(minPizzaColumn4pm);
  createStoreTable.appendChild(timeRow4pm);

  var maxPizzaColumn4pm = document.createElement('td');
  maxPizzaColumn4pm.textContent = maxPizza4pm;
  timeRow4pm.appendChild(maxPizzaColumn4pm);
  createStoreTable.appendChild(timeRow4pm);

  var minDeliveryColumn4pm = document.createElement('td');
  minDeliveryColumn4pm.textContent = minDelivery4pm;
  timeRow4pm.appendChild(minDeliveryColumn4pm);
  createStoreTable.appendChild(timeRow4pm);

  var maxDeliveryColumn4pm = document.createElement('td');
  maxDeliveryColumn4pm.textContent = maxDelivery4pm;
  timeRow4pm.appendChild(maxDeliveryColumn4pm);
  createStoreTable.appendChild(timeRow4pm);

  var hours5pm = event.target.hours5pm.value;
  var minPizza5pm = event.target.minPizza5pm.value;
  var maxPizza5pm = event.target.maxPizza5pm.value;
  var minDelivery5pm = event.target.minDelivery5pm.value;
  var maxDelivery5pm = event.target.maxDelivery5pm.value;

// The Dom directions for each variable

  var timeRow5pm = document.createElement('tr');

  var storeNameColumn5pm = document.createElement('td');
  storeNameColumn5pm.textContent = storeNameColumn;
  timeRow5pm.appendChild(storeNameColumn5pm);
  createStoreTable.appendChild(timeRow5pm);

  var hourColumn5pm = document.createElement('td');
  hourColumn5pm.textContent = hours5pm;
  timeRow5pm.appendChild(hourColumn5pm);
  createStoreTable.appendChild(timeRow5pm);

  var minPizzaColumn5pm = document.createElement('td');
  minPizzaColumn5pm.textContent = minPizza5pm;
  timeRow5pm.appendChild(minPizzaColumn5pm);
  createStoreTable.appendChild(timeRow5pm);

  var maxPizzaColumn5pm = document.createElement('td');
  maxPizzaColumn5pm.textContent = maxPizza5pm;
  timeRow5pm.appendChild(maxPizzaColumn5pm);
  createStoreTable.appendChild(timeRow5pm);

  var minDeliveryColumn5pm = document.createElement('td');
  minDeliveryColumn5pm.textContent = minDelivery5pm;
  timeRow5pm.appendChild(minDeliveryColumn5pm);
  createStoreTable.appendChild(timeRow5pm);

  var maxDeliveryColumn5pm = document.createElement('td');
  maxDeliveryColumn5pm.textContent = maxDelivery5pm;
  timeRow5pm.appendChild(maxDeliveryColumn5pm);
  createStoreTable.appendChild(timeRow5pm);

  var hours6pm = event.target.hours6pm.value;
  var minPizza6pm = event.target.minPizza6pm.value;
  var maxPizza6pm = event.target.maxPizza6pm.value;
  var minDelivery6pm = event.target.minDelivery6pm.value;
  var maxDelivery6pm = event.target.maxDelivery6pm.value;

// The Dom directions for each variable

  var timeRow6pm = document.createElement('tr');

  var storeNameColumn6pm = document.createElement('td');
  storeNameColumn6pm.textContent = storeNameColumn;
  timeRow6pm.appendChild(storeNameColumn6pm);
  createStoreTable.appendChild(timeRow6pm);

  var hourColumn6pm = document.createElement('td');
  hourColumn6pm.textContent = hours6pm;
  timeRow6pm.appendChild(hourColumn6pm);
  createStoreTable.appendChild(timeRow6pm);

  var minPizzaColumn6pm = document.createElement('td');
  minPizzaColumn6pm.textContent = minPizza6pm;
  timeRow6pm.appendChild(minPizzaColumn6pm);
  createStoreTable.appendChild(timeRow6pm);

  var maxPizzaColumn6pm = document.createElement('td');
  maxPizzaColumn6pm.textContent = maxPizza6pm;
  timeRow6pm.appendChild(maxPizzaColumn6pm);
  createStoreTable.appendChild(timeRow6pm);

  var minDeliveryColumn6pm = document.createElement('td');
  minDeliveryColumn6pm.textContent = minDelivery6pm;
  timeRow6pm.appendChild(minDeliveryColumn6pm);
  createStoreTable.appendChild(timeRow6pm);

  var maxDeliveryColumn6pm = document.createElement('td');
  maxDeliveryColumn6pm.textContent = maxDelivery6pm;
  timeRow6pm.appendChild(maxDeliveryColumn6pm);
  createStoreTable.appendChild(timeRow6pm);

  var hours7pm = event.target.hours7pm.value;
  var minPizza7pm = event.target.minPizza7pm.value;
  var maxPizza7pm = event.target.maxPizza7pm.value;
  var minDelivery7pm = event.target.minDelivery7pm.value;
  var maxDelivery7pm = event.target.maxDelivery7pm.value;

// The Dom directions for each variable

  var timeRow7pm = document.createElement('tr');

  var storeNameColumn7pm = document.createElement('td');
  storeNameColumn7pm.textContent = storeNameColumn;
  timeRow7pm.appendChild(storeNameColumn7pm);
  createStoreTable.appendChild(timeRow7pm);

  var hourColumn7pm = document.createElement('td');
  hourColumn7pm.textContent = hours7pm;
  timeRow7pm.appendChild(hourColumn7pm);
  createStoreTable.appendChild(timeRow7pm);

  var minPizzaColumn7pm = document.createElement('td');
  minPizzaColumn7pm.textContent = minPizza7pm;
  timeRow7pm.appendChild(minPizzaColumn7pm);
  createStoreTable.appendChild(timeRow7pm);

  var maxPizzaColumn7pm = document.createElement('td');
  maxPizzaColumn7pm.textContent = maxPizza7pm;
  timeRow7pm.appendChild(maxPizzaColumn7pm);
  createStoreTable.appendChild(timeRow7pm);

  var minDeliveryColumn7pm = document.createElement('td');
  minDeliveryColumn7pm.textContent = minDelivery7pm;
  timeRow7pm.appendChild(minDeliveryColumn7pm);
  createStoreTable.appendChild(timeRow7pm);

  var maxDeliveryColumn7pm = document.createElement('td');
  maxDeliveryColumn7pm.textContent = maxDelivery7pm;
  timeRow7pm.appendChild(maxDeliveryColumn7pm);
  createStoreTable.appendChild(timeRow7pm);

  var hours7pm = event.target.hours7pm.value;
  var minPizza7pm = event.target.minPizza7pm.value;
  var maxPizza7pm = event.target.maxPizza7pm.value;
  var minDelivery7pm = event.target.minDelivery7pm.value;
  var maxDelivery7pm = event.target.maxDelivery7pm.value;

// The Dom directions for each variable

  var timeRow7pm = document.createElement('tr');

  var storeNameColumn7pm = document.createElement('td');
  storeNameColumn7pm.textContent = storeNameColumn;
  timeRow7pm.appendChild(storeNameColumn7pm);
  createStoreTable.appendChild(timeRow7pm);

  var hourColumn7pm = document.createElement('td');
  hourColumn7pm.textContent = hours7pm;
  timeRow7pm.appendChild(hourColumn7pm);
  createStoreTable.appendChild(timeRow7pm);

  var minPizzaColumn7pm = document.createElement('td');
  minPizzaColumn7pm.textContent = minPizza7pm;
  timeRow7pm.appendChild(minPizzaColumn7pm);
  createStoreTable.appendChild(timeRow7pm);

  var maxPizzaColumn7pm = document.createElement('td');
  maxPizzaColumn7pm.textContent = maxPizza7pm;
  timeRow7pm.appendChild(maxPizzaColumn7pm);
  createStoreTable.appendChild(timeRow7pm);

  var minDeliveryColumn7pm = document.createElement('td');
  minDeliveryColumn7pm.textContent = minDelivery7pm;
  timeRow7pm.appendChild(minDeliveryColumn7pm);
  createStoreTable.appendChild(timeRow7pm);

  var maxDeliveryColumn7pm = document.createElement('td');
  maxDeliveryColumn7pm.textContent = maxDelivery7pm;
  timeRow7pm.appendChild(maxDeliveryColumn7pm);
  createStoreTable.appendChild(timeRow7pm);

  var hours8pm = event.target.hours8pm.value;
  var minPizza8pm = event.target.minPizza8pm.value;
  var maxPizza8pm = event.target.maxPizza8pm.value;
  var minDelivery8pm = event.target.minDelivery8pm.value;
  var maxDelivery8pm = event.target.maxDelivery8pm.value;

// The Dom directions for each variable

  var timeRow8pm = document.createElement('tr');

  var storeNameColumn8pm = document.createElement('td');
  storeNameColumn8pm.textContent = storeNameColumn;
  timeRow8pm.appendChild(storeNameColumn8pm);
  createStoreTable.appendChild(timeRow8pm);

  var hourColumn8pm = document.createElement('td');
  hourColumn8pm.textContent = hours8pm;
  timeRow8pm.appendChild(hourColumn8pm);
  createStoreTable.appendChild(timeRow8pm);

  var minPizzaColumn8pm = document.createElement('td');
  minPizzaColumn8pm.textContent = minPizza8pm;
  timeRow8pm.appendChild(minPizzaColumn8pm);
  createStoreTable.appendChild(timeRow8pm);

  var maxPizzaColumn8pm = document.createElement('td');
  maxPizzaColumn8pm.textContent = maxPizza8pm;
  timeRow8pm.appendChild(maxPizzaColumn8pm);
  createStoreTable.appendChild(timeRow8pm);

  var minDeliveryColumn8pm = document.createElement('td');
  minDeliveryColumn8pm.textContent = minDelivery8pm;
  timeRow8pm.appendChild(minDeliveryColumn8pm);
  createStoreTable.appendChild(timeRow8pm);

  var maxDeliveryColumn8pm = document.createElement('td');
  maxDeliveryColumn8pm.textContent = maxDelivery8pm;
  timeRow8pm.appendChild(maxDeliveryColumn8pm);
  createStoreTable.appendChild(timeRow8pm);

  var hours9pm = event.target.hours9pm.value;
  var minPizza9pm = event.target.minPizza9pm.value;
  var maxPizza9pm = event.target.maxPizza9pm.value;
  var minDelivery9pm = event.target.minDelivery9pm.value;
  var maxDelivery9pm = event.target.maxDelivery9pm.value;

// The Dom directions for each variable

  var timeRow9pm = document.createElement('tr');

  var storeNameColumn9pm = document.createElement('td');
  storeNameColumn9pm.textContent = storeNameColumn;
  timeRow9pm.appendChild(storeNameColumn9pm);
  createStoreTable.appendChild(timeRow9pm);

  var hourColumn9pm = document.createElement('td');
  hourColumn9pm.textContent = hours9pm;
  timeRow9pm.appendChild(hourColumn9pm);
  createStoreTable.appendChild(timeRow9pm);

  var minPizzaColumn9pm = document.createElement('td');
  minPizzaColumn9pm.textContent = minPizza9pm;
  timeRow9pm.appendChild(minPizzaColumn9pm);
  createStoreTable.appendChild(timeRow9pm);

  var maxPizzaColumn9pm = document.createElement('td');
  maxPizzaColumn9pm.textContent = maxPizza9pm;
  timeRow9pm.appendChild(maxPizzaColumn9pm);
  createStoreTable.appendChild(timeRow9pm);

  var minDeliveryColumn9pm = document.createElement('td');
  minDeliveryColumn9pm.textContent = minDelivery9pm;
  timeRow9pm.appendChild(minDeliveryColumn9pm);
  createStoreTable.appendChild(timeRow9pm);

  var maxDeliveryColumn9pm = document.createElement('td');
  maxDeliveryColumn9pm.textContent = maxDelivery9pm;
  timeRow9pm.appendChild(maxDeliveryColumn9pm);
  createStoreTable.appendChild(timeRow9pm);

  var hours10pm = event.target.hours10pm.value;
  var minPizza10pm = event.target.minPizza10pm.value;
  var maxPizza10pm = event.target.maxPizza10pm.value;
  var minDelivery10pm = event.target.minDelivery10pm.value;
  var maxDelivery10pm = event.target.maxDelivery10pm.value;

// The Dom directions for each variable

  var timeRow10pm = document.createElement('tr');

  var storeNameColumn10pm = document.createElement('td');
  storeNameColumn10pm.textContent = storeNameColumn;
  timeRow10pm.appendChild(storeNameColumn10pm);
  createStoreTable.appendChild(timeRow10pm);

  var hourColumn10pm = document.createElement('td');
  hourColumn10pm.textContent = hours10pm;
  timeRow10pm.appendChild(hourColumn10pm);
  createStoreTable.appendChild(timeRow10pm);

  var minPizzaColumn10pm = document.createElement('td');
  minPizzaColumn10pm.textContent = minPizza10pm;
  timeRow10pm.appendChild(minPizzaColumn10pm);
  createStoreTable.appendChild(timeRow10pm);

  var maxPizzaColumn10pm = document.createElement('td');
  maxPizzaColumn10pm.textContent = maxPizza10pm;
  timeRow10pm.appendChild(maxPizzaColumn10pm);
  createStoreTable.appendChild(timeRow10pm);

  var minDeliveryColumn10pm = document.createElement('td');
  minDeliveryColumn10pm.textContent = minDelivery10pm;
  timeRow10pm.appendChild(minDeliveryColumn10pm);
  createStoreTable.appendChild(timeRow10pm);

  var maxDeliveryColumn10pm = document.createElement('td');
  maxDeliveryColumn10pm.textContent = maxDelivery10pm;
  timeRow10pm.appendChild(maxDeliveryColumn10pm);
  createStoreTable.appendChild(timeRow10pm);

  var hours11pm = event.target.hours11pm.value;
  var minPizza11pm = event.target.minPizza11pm.value;
  var maxPizza11pm = event.target.maxPizza11pm.value;
  var minDelivery11pm = event.target.minDelivery11pm.value;
  var maxDelivery11pm = event.target.maxDelivery11pm.value;

// The Dom directions for each variable

  var timeRow11pm = document.createElement('tr');

  var storeNameColumn11pm = document.createElement('td');
  storeNameColumn11pm.textContent = storeNameColumn;
  timeRow11pm.appendChild(storeNameColumn11pm);
  createStoreTable.appendChild(timeRow11pm);

  var hourColumn11pm = document.createElement('td');
  hourColumn11pm.textContent = hours11pm;
  timeRow11pm.appendChild(hourColumn11pm);
  createStoreTable.appendChild(timeRow11pm);

  var minPizzaColumn11pm = document.createElement('td');
  minPizzaColumn11pm.textContent = minPizza11pm;
  timeRow11pm.appendChild(minPizzaColumn11pm);
  createStoreTable.appendChild(timeRow11pm);

  var maxPizzaColumn11pm = document.createElement('td');
  maxPizzaColumn11pm.textContent = maxPizza11pm;
  timeRow11pm.appendChild(maxPizzaColumn11pm);
  createStoreTable.appendChild(timeRow11pm);

  var minDeliveryColumn11pm = document.createElement('td');
  minDeliveryColumn11pm.textContent = minDelivery11pm;
  timeRow11pm.appendChild(minDeliveryColumn11pm);
  createStoreTable.appendChild(timeRow11pm);

  var maxDeliveryColumn11pm = document.createElement('td');
  maxDeliveryColumn11pm.textContent = maxDelivery11pm;
  timeRow11pm.appendChild(maxDeliveryColumn11pm);
  createStoreTable.appendChild(timeRow11pm);

  var hoursMidnight = event.target.hoursMidnight.value;
  var minPizzaMidnight = event.target.minPizzaMidnight.value;
  var maxPizzaMidnight = event.target.maxPizzaMidnight.value;
  var minDeliveryMidnight = event.target.minDeliveryMidnight.value;
  var maxDeliveryMidnight = event.target.maxDeliveryMidnight.value;

// The Dom directions for each variable

  var timeRowMidnight = document.createElement('tr');

  var storeNameColumnMidnight = document.createElement('td');
  storeNameColumnMidnight.textContent = storeNameColumn;
  timeRowMidnight.appendChild(storeNameColumnMidnight);
  createStoreTable.appendChild(timeRowMidnight);

  var hourColumnMidnight = document.createElement('td');
  hourColumnMidnight.textContent = hoursMidnight;
  timeRowMidnight.appendChild(hourColumnMidnight);
  createStoreTable.appendChild(timeRowMidnight);

  var minPizzaColumnMidnight = document.createElement('td');
  minPizzaColumnMidnight.textContent = minPizzaMidnight;
  timeRowMidnight.appendChild(minPizzaColumnMidnight);
  createStoreTable.appendChild(timeRowMidnight);

  var maxPizzaColumnMidnight = document.createElement('td');
  maxPizzaColumnMidnight.textContent = maxPizzaMidnight;
  timeRowMidnight.appendChild(maxPizzaColumnMidnight);
  createStoreTable.appendChild(timeRowMidnight);

  var minDeliveryColumnMidnight = document.createElement('td');
  minDeliveryColumnMidnight.textContent = minDeliveryMidnight;
  timeRowMidnight.appendChild(minDeliveryColumnMidnight);
  createStoreTable.appendChild(timeRowMidnight);

  var maxDeliveryColumnMidnight = document.createElement('td');
  maxDeliveryColumnMidnight.textContent = maxDeliveryMidnight;
  timeRowMidnight.appendChild(maxDeliveryColumnMidnight);
  createStoreTable.appendChild(timeRowMidnight);

  var hours1am = event.target.hours1am.value;
  var minPizza1am = event.target.minPizza1am.value;
  var maxPizza1am = event.target.maxPizza1am.value;
  var minDelivery1am = event.target.minDelivery1am.value;
  var maxDelivery1am = event.target.maxDelivery1am.value;

// The Dom directions for each variable

  var timeRow1am = document.createElement('tr');

  var storeNameColumn1am = document.createElement('td');
  storeNameColumn1am.textContent = storeNameColumn;
  timeRow1am.appendChild(storeNameColumn1am);
  createStoreTable.appendChild(timeRow1am);

  var hourColumn1am = document.createElement('td');
  hourColumn1am.textContent = hours1am;
  timeRow1am.appendChild(hourColumn1am);
  createStoreTable.appendChild(timeRow1am);

  var minPizzaColumn1am = document.createElement('td');
  minPizzaColumn1am.textContent = minPizza1am;
  timeRow1am.appendChild(minPizzaColumn1am);
  createStoreTable.appendChild(timeRow1am);

  var maxPizzaColumn1am = document.createElement('td');
  maxPizzaColumn1am.textContent = maxPizza1am;
  timeRow1am.appendChild(maxPizzaColumn1am);
  createStoreTable.appendChild(timeRow1am);

  var minDeliveryColumn1am = document.createElement('td');
  minDeliveryColumn1am.textContent = minDelivery1am;
  timeRow1am.appendChild(minDeliveryColumn1am);
  createStoreTable.appendChild(timeRow1am);

  var maxDeliveryColumn1am = document.createElement('td');
  maxDeliveryColumn1am.textContent = maxDelivery1am;
  timeRow1am.appendChild(maxDeliveryColumn1am);
  createStoreTable.appendChild(timeRow1am);

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
