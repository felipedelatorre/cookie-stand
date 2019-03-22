'use strict';

//---------------------------
// Global variables
//---------------------------

var OPEN_HOURS = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var ROW_ATTRIBUTE_FOR_TOTALS = 'totals';

//---------------------------
// Define Function
//---------------------------

// Renders last row of totals
var renderRowOfTotals = function(parentElement, locationStores) {
  var tr = document.createElement('tr');
  tr.setAttribute('id', ROW_ATTRIBUTE_FOR_TOTALS);
  parentElement.appendChild(tr);

  var td = document.createElement('td');
  td.textContent = 'Totals';
  tr.appendChild(td);

  for (var i = 0; i < locationStores[0].cookiesPurchasePerHour.length; i++) {
    var storeTotals = 0;
    td = document.createElement('td');
    for (var j = 0; j < locationStores.length; j++) {
      storeTotals += locationStores[j].cookiesPurchasePerHour[i];    
    }
    td.textContent = storeTotals;
    tr.appendChild(td);
  }

  var grandTotal = 0;
  td = document.createElement('td');
  for (i = 0; i < locationStores.length; i++) {
    grandTotal += locationStores[i].getTotalCookies();
  }
  td.textContent = grandTotal;
  tr.appendChild(td);
};

//Renders cities/sales row
var renderRow = function(parentElement) {
  this.addToCookiesList(); //Creates random # of sales into the array
  var tr = document.createElement('tr');
  parentElement.appendChild(tr);

  var td = document.createElement('td');
  td.textContent = this.storeLocation;
  tr.appendChild(td);
  for (var i = 0; i < this.cookiesPurchasePerHour.length; i++) {
    td = document.createElement('td');
    td.textContent = this.cookiesPurchasePerHour[i];
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = this.getTotalCookies();
  tr.appendChild(td);

};

// Deletes Rows by ID
var deleteRow = function(rowId)  {
  var row = document.getElementById(rowId);
  row.parentNode.removeChild(row);
};

// Object and Prototypes for stores
function Store(storeLocation, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.storeLocation = storeLocation;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPurchasePerHour = [];

  centralOregonStores.push(this);
}

Store.prototype.avgCustomersPerHour = function() {
  var customerSpread = this.maxCustomers - this.minCustomers + 1;
  return Math.floor(Math.random() * (customerSpread)) + this.minCustomers;
};

Store.prototype.addToCookiesList = function() {
  for (var i = 0; i < OPEN_HOURS.length; i++) {
    this.cookiesPurchasePerHour.push(Math.floor(this.avgCustomersPerHour() * this.avgCookiesPerCustomer));
  }
};

Store.prototype.getTotalCookies = function() {
  var totalCookies = 0;
  for (var i = 0; i < this.cookiesPurchasePerHour.length; i++) {
    totalCookies = totalCookies + this.cookiesPurchasePerHour[i];
  }
  return totalCookies;
};

Store.prototype.render = renderRow;

//---------------------------
// Define Data
//---------------------------

var centralOregonStores = [];

//---------------------------
// Run Script
//---------------------------

// Creates parent element and row of times
var tableOfSales = document.getElementById('salesTable');

//-------------------------
// Event handlers
//-------------------------
var cityForm = document.getElementById('addCityForm');

var addCityEventHandler = function(event){
  event.preventDefault();

  var verifyElement = document.getElementById(ROW_ATTRIBUTE_FOR_TOTALS);
  if (verifyElement !== null) {
    deleteRow(ROW_ATTRIBUTE_FOR_TOTALS);
  }

  var target = event.target;
  var name = target.cityName.value;
  var min = parseInt(target.min.value, 10);
  var max = parseInt(target.max.value, 10);
  var avg = parseInt(target.avg.value, 10);

  event.target.reset();

  var city = new Store(name, min, max, avg);
  city.render(tableOfSales);

  renderRowOfTotals(tableOfSales, centralOregonStores);

};

cityForm.addEventListener('submit', addCityEventHandler);

