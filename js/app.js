'use strict';
let workingHours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
let dailyLocationTotal = [];
let totals = 0;

const ParentElement = document.getElementById( 'shops' );//creat the table
const tableElement = document.createElement( 'table' );
ParentElement.appendChild( tableElement );

const theadElement = document.createElement( 'thead' );//creat the table header
tableElement.appendChild( theadElement );

const tbodyElement = document.createElement( 'tbody' );//creat the table body
tableElement.appendChild( tbodyElement );

const tfootElement = document.createElement( 'tfoot' );//creat the table footer
tableElement.appendChild( tfootElement );


function Shop ( lacation, minCustomers, maxCustomers, avgCookieSale ){
  this.lacation = lacation;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookieSale = avgCookieSale;
  this.NumberOfCookiesPerHour = [];
  this.NumberOfCustomersPerHour = [];
  this.totalNumberOfCookies = 0;

}

// method to  do the calculation
Shop.prototype.getNumberOfCookiesPerHour = function( ){
  for ( let i = 0; i < workingHours.length; i++ ){
    this.NumberOfCustomersPerHour.push( Math.floor( Math.random() * ( this.maxCustomers - this.minCustomers ) + this.minCustomers ) );

    this.NumberOfCookiesPerHour.push( Math.ceil( this.NumberOfCustomersPerHour[i] * this.avgCookieSale ) );
    this.totalNumberOfCookies += Number( this.NumberOfCookiesPerHour[i] );
  }
  dailyLocationTotal.push( this.totalNumberOfCookies );
};


Shop.prototype.render = function(){
  this.getNumberOfCookiesPerHour();

  //print table body
  const tbodyElement = document.createElement( 'tbody' );
  tableElement.appendChild( tbodyElement );

  const tr2Element = document.createElement( 'tr' );
  tbodyElement.appendChild( tr2Element );

  const thElement = document.createElement( 'th' );
  tr2Element.appendChild( thElement );
  thElement.textContent = this.lacation;

  for( let i = 0; i < this.NumberOfCookiesPerHour.length; i++ ){
    const tdElement = document.createElement( 'td' );
    tr2Element.appendChild( tdElement );
    tdElement.textContent = this.NumberOfCookiesPerHour[i];
  }
  const td2Element = document.createElement( 'td' );
  tr2Element.appendChild( td2Element );
  td2Element.textContent = this.totalNumberOfCookies;
};

// Function to print table header
function printTableHeader ( ){

  const theadElement = document.createElement( 'thead' );
  tableElement.appendChild( theadElement );

  const tr1Element = document.createElement( 'tr' );
  theadElement.appendChild( tr1Element );
  const thElement = document.createElement( 'th' );
  tr1Element.appendChild( thElement );
  thElement.textContent = 'Location';//

  for( let i = 0; i < workingHours.length; i++ ){
    const thElement = document.createElement( 'th' );
    tr1Element.appendChild( thElement );
    thElement.textContent = workingHours[i];
  }
  const th2Element = document.createElement( 'th' );
  tr1Element.appendChild( th2Element );
  th2Element.textContent = 'Daily Location Total';
}

// // Function to print table footer
function printTableFooter( ){

  const tr8Element = document.createElement( 'tr' );
  tfootElement.appendChild( tr8Element );

  const th2Element = document.createElement( 'th' );
  tr8Element.appendChild( th2Element );
  th2Element.textContent = 'Totals';//

  for( let i = 0; i < workingHours.length; i++ ){
    const thElement = document.createElement( 'th' );
    tr8Element.appendChild( thElement );
    thElement.textContent = seattle.NumberOfCookiesPerHour[i] + tokyo.NumberOfCookiesPerHour[i] + dubai.NumberOfCookiesPerHour[i]
     + paris.NumberOfCookiesPerHour[i] + lima.NumberOfCookiesPerHour[i];
  }
  // calculate the total of the Daily Location Total
  for ( let i = 0; i < dailyLocationTotal.length; i++ ) {
    totals += dailyLocationTotal[i];
  }
  const th3Element = document.createElement( 'th' );
  tr8Element.appendChild( th3Element );
  th3Element.textContent = totals;
}


// main programe execution start here
//creating shops objects//
const seattle = new Shop( 'seattle', 23, 65, 6.3 );
const tokyo = new Shop( 'tokyo', 3, 24, 1.2 );
const dubai = new Shop( 'dubai', 11, 38, 3.7 );
const paris = new Shop( 'paris', 23, 38, 2.3 );
const lima = new Shop( 'lima', 2, 16, 4.6 );

printTableHeader();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

printTableFooter( );
