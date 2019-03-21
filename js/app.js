'use strict';
//---------------------------
// Define Function
//---------------------------

//Renders header row of times
var renderRowOfTimes = function(parentElement) {
  var tr = document.createElement('tr');
  parentElement.appendChild(tr);

  var th = document.createElement('th');
  th.textContent = 'City/Times';
  tr.appendChild(th);

  for (var i = 0; i < 15; i++) {
    th = document.createElement('th');
    if (i < 7) {
      th.textContent = (i+6) + ' am';
    } else {
      th.textContent = (i-6) + ' pm';
    }
    tr.appendChild(th);
  }
  th = document.createElement('th');
  th.textContent = 'Total';
  tr.appendChild(th);
};

// Renders last row of totals
var renderRowOfTotals = function(parentElement, locationStores) {
  var tr = document.createElement('tr');
  tr.setAttribute('id', 'totals');
  parentElement.appendChild(tr);

  var td = document.createElement('td');
  td.textContent = 'Totals';
  tr.appendChild(td);

  for (var i = 0; i < locationStores[0]['cookiesPurchasePerHour'].length; i++) {
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
var deleteRow = function(rowid)  {   
  var row = document.getElementById(rowid);
  row.parentNode.removeChild(row);
};

// Object and Prototypes for stores
function Store(storeLocation, minCustomers, maxCustomers, avgCookiesPerCustomer, cookiesPurchasePerHour) {
  this.storeLocation = storeLocation;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPurchasePerHour = cookiesPurchasePerHour || 9999;

  centralOregonStores.push(this);
}

Store.prototype.avgCustomersPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};

Store.prototype.addToCookiesList = function() {
  this.cookiesPurchasePerHour = [];
  for (var i = 0; i < 15; i++) {
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
renderRowOfTimes(tableOfSales);

//-------------------------
// Event handlers
//-------------------------
var CityForm = document.getElementById('addCityForm');

var addCityEventHandler = function(event){
  event.preventDefault();

  var verifyElement = document.getElementById('totals');
  if (verifyElement !== null) {
    deleteRow('totals');
  }


  var name = event.target.cityName.value;
  var min = parseInt(event.target.min.value, 10);
  var max = parseInt(event.target.max.value, 10);
  var avg = parseInt(event.target.avg.value, 10);

  event.target.reset();

  var city = new Store(name, min, max, avg);
  city.render(tableOfSales);

  renderRowOfTotals(tableOfSales, centralOregonStores);

};

CityForm.addEventListener('submit', addCityEventHandler);

