'use strict';
let workingHours = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm'];

// >>>>>>>>>>>>>>>>>>>Seattle<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const seattle = {
  lacation: 'seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookieSale: 6.3,
  NumberOfCookiesPerHour:[],
  NumberOfCustomersPerHour: [],
  totalNumberOfCookies: 0,

  getNumberOfCookiesPerHour: function( ){
    for ( let i = 0; i < workingHours.length; i++ ){
      this.NumberOfCustomersPerHour = Math.floor( Math.random() * ( this.maxCustomers - this.minCustomers ) + this.minCustomers );

      this.NumberOfCookiesPerHour.push( Math.ceil( this.NumberOfCustomersPerHour * this.avgCookieSale ) );
      this.totalNumberOfCookies += Number( this.NumberOfCookiesPerHour[i] );
    }
  },
  render: function(){
    seattle.getNumberOfCookiesPerHour();
    const ParentElement = document.getElementById( 'seattle' );

    const articleElement = document.createElement( 'article' );
    ParentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.lacation;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let j = 0; j < workingHours.length; j++ ){
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${workingHours[j]}: ${this.NumberOfCookiesPerHour[j]} cookies`;
    }
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total: ${this.totalNumberOfCookies} cookies`;
  }
};

seattle.render();

// >>>>>>>>>>>>>>>>>>>Tokyo<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const tokyo = {
  lacation: 'tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookieSale: 1.2,
  NumberOfCookiesPerHour:[],
  NumberOfCustomersPerHour: [],
  totalNumberOfCookies: 0,

  getNumberOfCookiesPerHour: function( ){
    for ( let i = 0; i < workingHours.length; i++ ){
      this.NumberOfCustomersPerHour = Math.floor( Math.random() * ( this.maxCustomers - this.minCustomers ) + this.minCustomers );

      this.NumberOfCookiesPerHour.push( Math.ceil( this.NumberOfCustomersPerHour * this.avgCookieSale ) );
      this.totalNumberOfCookies += Number( this.NumberOfCookiesPerHour[i] );
    }
  },
  render: function(){
    tokyo.getNumberOfCookiesPerHour();
    const ParentElement = document.getElementById( 'tokyo' );

    const articleElement = document.createElement( 'article' );
    ParentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.lacation;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let j = 0; j < workingHours.length; j++ ){
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${workingHours[j]}: ${this.NumberOfCookiesPerHour[j]} cookies`;
    }
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total: ${this.totalNumberOfCookies} cookies`;
  }
};

tokyo.render();

// >>>>>>>>>>>>>>>>>>>Dubai<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const dubai = {
  lacation: 'dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookieSale: 3.7,
  NumberOfCookiesPerHour:[],
  NumberOfCustomersPerHour: [],
  totalNumberOfCookies: 0,

  getNumberOfCookiesPerHour: function( ){
    for ( let i = 0; i < workingHours.length; i++ ){
      this.NumberOfCustomersPerHour = Math.floor( Math.random() * ( this.maxCustomers - this.minCustomers ) + this.minCustomers );

      this.NumberOfCookiesPerHour.push( Math.ceil( this.NumberOfCustomersPerHour * this.avgCookieSale ) );
      this.totalNumberOfCookies += Number( this.NumberOfCookiesPerHour[i] );
    }
  },
  render: function(){
    dubai.getNumberOfCookiesPerHour();
    const ParentElement = document.getElementById( 'dubai' );

    const articleElement = document.createElement( 'article' );
    ParentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.lacation;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let j = 0; j < workingHours.length; j++ ){
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${workingHours[j]}: ${this.NumberOfCookiesPerHour[j]} cookies`;
    }
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total: ${this.totalNumberOfCookies} cookies`;
  }
};

dubai.render();

// >>>>>>>>>>>>>>>>>>>Paris<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const paris = {
  lacation: 'paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookieSale: 2.3,
  NumberOfCookiesPerHour:[],
  NumberOfCustomersPerHour: [],
  totalNumberOfCookies: 0,

  getNumberOfCookiesPerHour: function( ){
    for ( let i = 0; i < workingHours.length; i++ ){
      this.NumberOfCustomersPerHour = Math.floor( Math.random() * ( this.maxCustomers - this.minCustomers ) + this.minCustomers );

      this.NumberOfCookiesPerHour.push( Math.ceil( this.NumberOfCustomersPerHour * this.avgCookieSale ) );
      this.totalNumberOfCookies += Number( this.NumberOfCookiesPerHour[i] );
    }
  },
  render: function(){
    paris.getNumberOfCookiesPerHour();
    const ParentElement = document.getElementById( 'paris' );

    const articleElement = document.createElement( 'article' );
    ParentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.lacation;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let j = 0; j < workingHours.length; j++ ){
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${workingHours[j]}: ${this.NumberOfCookiesPerHour[j]} cookies`;
    }
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total: ${this.totalNumberOfCookies} cookies`;
  }
};

paris.render();

// >>>>>>>>>>>>>>>>>>>Lima<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const lima = {
  lacation: 'lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookieSale: 4.6,
  NumberOfCookiesPerHour:[],
  NumberOfCustomersPerHour: [],
  totalNumberOfCookies: 0,

  getNumberOfCookiesPerHour: function( ){
    for ( let i = 0; i < workingHours.length; i++ ){
      this.NumberOfCustomersPerHour = Math.floor( Math.random() * ( this.maxCustomers - this.minCustomers ) + this.minCustomers );

      this.NumberOfCookiesPerHour.push( Math.ceil( this.NumberOfCustomersPerHour * this.avgCookieSale ) );
      this.totalNumberOfCookies += Number( this.NumberOfCookiesPerHour[i] );
    }
  },
  render: function(){
    lima.getNumberOfCookiesPerHour();
    const ParentElement = document.getElementById( 'lima' );

    const articleElement = document.createElement( 'article' );
    ParentElement.appendChild( articleElement );

    const h2Element = document.createElement( 'h2' );
    articleElement.appendChild( h2Element );
    h2Element.textContent = this.lacation;

    const ulElement = document.createElement( 'ul' );
    articleElement.appendChild( ulElement );

    for( let j = 0; j < workingHours.length; j++ ){
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent = `${workingHours[j]}: ${this.NumberOfCookiesPerHour[j]} cookies`;
    }
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent = `Total: ${this.totalNumberOfCookies} cookies`;
  }
};

lima.render();

