const users = [
  { id: 1, name: "Alice", age: 28, specialty: "Marketing" },
  { id: 2, name: "Bob", age: 35, specialty: "Engineering" },
  { id: 3, name: "Charlie", age: 22, specialty: "Marketing" },
  { id: 4, name: "David", age: 42, specialty: "Engineering" },
  { id: 5, name: "Eve", age: 29, specialty: "Design" },
];
// Etape 1
let userNames = [];

for (let i=0; i < users.length; i++) {
    userNames.push(users[i].name);
}

console.log(userNames);

//Etape 2
let userEngineers = [];

for (let i=0; i < users.length; i++) {
    if (users[i].specialty === "Engineering") {
        userEngineers.push(users[i]);
    }
}
console.log(userEngineers);

//Etape 3
let userAges = 0;
for (let i=0; i<users.length; i++){
    userAges += users[i].age;
}
let averageAge = userAges / users.length;
console.log('Average age:', averageAge);
//Etape 4
let userDescriptions = [];
for (let i=0; i<users.length; i++){
    userDescriptions.push(users[i].name + ' is ' + users[i].age + ' years old and specializes in ' + users[i].specialty + '.');
}
console.log(userDescriptions);

