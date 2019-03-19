var bend = {
  name: 'Bend',
  minCustomers:  23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  cookiesPurchasePerHour: [],

  avgCustomersPerHour: function(){
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  addToCookiesList: function(){
    for (var i = 0; i < 15; i++) {
      this.cookiesPurchasePerHour.push(Math.floor(this.avgCustomersPerHour() * this.avgCookiesPerCustomer));
    }
  },
  getTotalCookies: function(){
    var totalCookies = 0;
    for (var i = 0; i < this.cookiesPurchasePerHour.length; i++) {
      totalCookies = totalCookies + this.cookiesPurchasePerHour[i];
    }
    return totalCookies;
  },
};

var redmond = {
  name: 'Redmond',
  minCustomers:  3,
  maxCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  cookiesPurchasePerHour: [],

  avgCustomersPerHour: function(){
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  addToCookiesList: function(){
    for (var i = 0; i < 15; i++) {
      this.cookiesPurchasePerHour.push(Math.floor(this.avgCustomersPerHour() * this.avgCookiesPerCustomer));
    }
  },
  getTotalCookies: function(){
    var totalCookies = 0;
    for (var i = 0; i < this.cookiesPurchasePerHour.length; i++) {
      totalCookies = totalCookies + this.cookiesPurchasePerHour[i];
    }
    return totalCookies;
  },
};

var madras = {
  name: 'Madras',
  minCustomers:  11,
  maxCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  cookiesPurchasePerHour: [],

  avgCustomersPerHour: function(){
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  addToCookiesList: function(){
    for (var i = 0; i < 15; i++) {
      this.cookiesPurchasePerHour.push(Math.floor(this.avgCustomersPerHour() * this.avgCookiesPerCustomer));
    }
  },
  getTotalCookies: function(){
    var totalCookies = 0;
    for (var i = 0; i < this.cookiesPurchasePerHour.length; i++) {
      totalCookies = totalCookies + this.cookiesPurchasePerHour[i];
    }
    return totalCookies;
  },
};

var prineville = {
  name: 'Prineville',
  minCustomers:  20,
  maxCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  cookiesPurchasePerHour: [],

  avgCustomersPerHour: function(){
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  addToCookiesList: function(){
    for (var i = 0; i < 15; i++) {
      this.cookiesPurchasePerHour.push(Math.floor(this.avgCustomersPerHour() * this.avgCookiesPerCustomer));
    }
  },
  getTotalCookies: function(){
    var totalCookies = 0;
    for (var i = 0; i < this.cookiesPurchasePerHour.length; i++) {
      totalCookies = totalCookies + this.cookiesPurchasePerHour[i];
    }
    return totalCookies;
  },
};

var sisters = {
  name: 'Sisters',
  minCustomers:  2,
  maxCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  cookiesPurchasePerHour: [],

  avgCustomersPerHour: function(){
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  },

  addToCookiesList: function(){
    for (var i = 0; i < 15; i++) {
      this.cookiesPurchasePerHour.push(Math.floor(this.avgCustomersPerHour() * this.avgCookiesPerCustomer));
    }
  },
  getTotalCookies: function(){
    var totalCookies = 0;
    for (var i = 0; i < this.cookiesPurchasePerHour.length; i++) {
      totalCookies = totalCookies + this.cookiesPurchasePerHour[i];
    }
    return totalCookies;
  },
};

{/* <section id="cityList">
<article id="bend">
<h1>Bend</h1>
  <ul>
    <li>6am: </li>
    <li>7am: </li>
    <li>8am: </li>
    <li>9am: </li>
    <li>10am: </li>
    <li>11am: </li>
    <li>12pm: </li>
    <li>1pm: </li>
    <li>2pm: </li>
    <li>3pm: </li>
    <li>4pm: </li>
    <li>5pm: </li>
    <li>6pm: </li>
    <li>7pm: </li>
    <li>8pm: </li>
  </ul>
</article>
</section> */}


var cityListElement = document.getElementById('cityList');

// Bend
var article = document.createElement('article');
article.setAttribute('id', `${bend.name.toLowerCase()}`);
cityListElement.appendChild(article);

var h1 = document.createElement('h1');
h1.textContent = bend.name;
article.appendChild(h1);

var ul = document.createElement('ul');
article.appendChild(ul);

bend.addToCookiesList();
for (var i = 0; i < 15; i++){
  var li = document.createElement('li');
  if (i < 7) {
    li.textContent = (i+6) + ' am: ';
  } else {
    li.textContent = (i-6) + ' pm: ';
  }
  li.textContent += bend.cookiesPurchasePerHour[i] + ' cookies';
  ul.appendChild(li);
}
bend.getTotalCookies();
li.textContent = 'Total: ' + bend.getTotalCookies() + ' cookies';
ul.appendChild(li);

// Redmond
article = document.createElement('article');
article.setAttribute('id', `${redmond.name.toLowerCase()}`);
cityListElement.appendChild(article);

h1 = document.createElement('h1');
h1.textContent = redmond.name;
article.appendChild(h1);

ul = document.createElement('ul');
article.appendChild(ul);

redmond.addToCookiesList();
for (i = 0; i < 15; i++){
  li = document.createElement('li');
  if (i < 7) {
    li.textContent = (i+6) + ' am: ';
  } else {
    li.textContent = (i-6) + ' pm: ';
  }
  li.textContent += redmond.cookiesPurchasePerHour[i] + ' cookies';
  ul.appendChild(li);
}
redmond.getTotalCookies();
li.textContent = 'Total: ' + redmond.getTotalCookies() + ' cookies';
ul.appendChild(li);

// Madras
article = document.createElement('article');
article.setAttribute('id', `${madras.name.toLowerCase()}`);
cityListElement.appendChild(article);

h1 = document.createElement('h1');
h1.textContent = madras.name;
article.appendChild(h1);

ul = document.createElement('ul');
article.appendChild(ul);

madras.addToCookiesList();
for (i = 0; i < 15; i++){
  li = document.createElement('li');
  if (i < 7) {
    li.textContent = (i+6) + ' am: ';
  } else {
    li.textContent = (i-6) + ' pm: ';
  }
  li.textContent += madras.cookiesPurchasePerHour[i] + ' cookies';
  ul.appendChild(li);
}
madras.getTotalCookies();
li.textContent = 'Total: ' + madras.getTotalCookies() + ' cookies';
ul.appendChild(li);

// Prineville
article = document.createElement('article');
article.setAttribute('id', `${prineville.name.toLowerCase()}`);
cityListElement.appendChild(article);

h1 = document.createElement('h1');
h1.textContent = prineville.name;
article.appendChild(h1);

ul = document.createElement('ul');
article.appendChild(ul);

prineville.addToCookiesList();
for (i = 0; i < 15; i++){
  li = document.createElement('li');
  if (i < 7) {
    li.textContent = (i+6) + ' am: ';
  } else {
    li.textContent = (i-6) + ' pm: ';
  }
  li.textContent += prineville.cookiesPurchasePerHour[i] + ' cookies';
  ul.appendChild(li);
}
prineville.getTotalCookies();
li.textContent = 'Total: ' + prineville.getTotalCookies() + ' cookies';
ul.appendChild(li);

// Sisters
article = document.createElement('article');
article.setAttribute('id', `${sisters.name.toLowerCase()}`);
cityListElement.appendChild(article);

h1 = document.createElement('h1');
h1.textContent = sisters.name;
article.appendChild(h1);

ul = document.createElement('ul');
article.appendChild(ul);

sisters.addToCookiesList();
for (i = 0; i < 15; i++){
  li = document.createElement('li');
  if (i < 7) {
    li.textContent = (i+6) + ' am: ';
  } else {
    li.textContent = (i-6) + ' pm: ';
  }
  li.textContent += sisters.cookiesPurchasePerHour[i] + ' cookies';
  ul.appendChild(li);
}
sisters.getTotalCookies();
li.textContent = 'Total: ' + sisters.getTotalCookies() + ' cookies';
ul.appendChild(li);

//