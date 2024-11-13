// You can also chain map() and filter() together. For example, if you want to get the usernames of users who are older than 30.

let users = [
    { id: 1, username: 'Alice', age: 25 },
    { id: 2, username: 'Bob', age: 30 },
    { id: 3, username: 'Charlie', age: 35 }
];

// Using filter() to get users older than 30 and then map() to extract their usernames
let olderUsernames = users
    .filter(function(user) {
        return user.age > 30;
    })
    .map(function(user) {
        return user.username;
    });

console.log('Usernames of users older than 30:', olderUsernames);
