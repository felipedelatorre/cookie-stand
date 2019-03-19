'use strict';

//---------------------------
// Define Function
//---------------------------

//Renders header row
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

//Renders cities/sales row
var renderRow = function(parentElement) {
  this.addToCookiesList(); //Creates random # of sales
  var tr = document.createElement('tr');
  parentElement.appendChild(tr);

  var td = document.createElement('td');
  td.textContent = this.storeLocation;
  tr.appendChild(td);  
  for (var i = 0; i < 15; i++) {
    td = document.createElement('td');
    td.textContent = this.cookiesPurchasePerHour[i];
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = this.getTotalCookies();
  tr.appendChild(td);

};

// Object and Prototypes
function Store(storeLocation, minCustomers, maxCustomers, avgCookiesPerCustomer, cookiesPurchasePerHour) {
  this.storeLocation = storeLocation;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPurchasePerHour = cookiesPurchasePerHour;

  centralOregonStores.push(this);
}

Store.prototype.avgCustomersPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};

Store.prototype.addToCookiesList = function() {
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

// Creates parent element
// var cityListElement = document.getElementById('cityList');
var tableOfSales = document.getElementById('salesTable');

var bendStore = new Store('Bend', 23, 65, 6.3, []);
var redmondStore = new Store('Redmond', 3, 24, 1.2,  []);
var madrasStore = new Store('Madras', 11, 37, 3.7, []);
var prinevilleStore = new Store('Prineville', 20, 38, 2.3, []);
var sistersStore = new Store('Sisters', 2, 16, 4.6, []);


renderRowOfTimes(tableOfSales);
for (var i = 0; i < centralOregonStores.length; i++) {
  centralOregonStores[i].render(tableOfSales);
}
