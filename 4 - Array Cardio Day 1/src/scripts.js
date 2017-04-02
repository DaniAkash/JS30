/**
 * Data provided as inputs
 */
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, death: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, death: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, death: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, death: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, death: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, death: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, death: 1947 }
];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogo stick'];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

/**
 * Solutions to the problems
 */

// List of Inventors born in 1500's
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(fifteen);

// Array of Inventors first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

// Sort Inventors by birthdate oldest to youngest
const ordered = inventors.sort((first, second) => (first.year > second.year)? 1: -1);
console.table(ordered);

// How many years did all inventors live
const totalYears = inventors.reduce((total, inventor) => total + inventor.death - inventor.year, 0);
console.log(totalYears);

// Sort Inventors by years lived
const oldest = inventors.sort((first, second) => {
  const firstGuy = first.death - first.year;
  const secondGuy = second.death - second.year;
  return (firstGuy > secondGuy)? -1: 1;
})
console.table(oldest);

/**
 * Create a list of Boulevards in Paris that contains de anywhere in their name
 * This problem requires the following script to be run in console at
 * https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
 * It will query the dom elements from this page to print the result in console.

  #################################################################################
  #   const category = document.querySelector(".mw-category");                    #
  #   const links = [...category.querySelectorAll("a")];                          #
  #   const de = links                                                            #
  #               .map(link => link.textContent)                                  #
  #               .filter(streetName => streetName.includes("de"));               #
  #   console.log(de);                                                            #
  #################################################################################

  */

// Sort people alphabetically by last name
const alphaSorted = people.sort((first, second) => {
  const [aLast, aFirst] = first.split(', ');
  const [bLast, bFirst] = second.split(', ');
  return (aLast > bLast)? 1: -1;
})
console.log(alphaSorted);

// Sum up the instances of each item in data
const transportation = data.reduce((obj, transport) => {
  if(!obj[transport]) obj[transport] = 0;
  obj[transport]++;
  return obj;
}, {});
console.log(transportation);