const _ = require('lodash'); // Import Lodash

// Sample data
const users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 34 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 36 }
];

// Assigning the sortBy method to sort
const sort = _.sortBy;

// Sorting by age
const sortedUsers = sort(users, ['age']);

console.log(sortedUsers);
