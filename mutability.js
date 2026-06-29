
const clone1 = Object.assign({}, person)
const clone2 = { ...person }
const samePerson = person

person.age ++
person.country = 'FR'









console.log(person.age === 78); // Should be true
console.log(person.country === "FR"); // Should be true

console.log(clone1.age === 77); // Should be true
console.log(clone1.country === "US"); // Should be true

console.log(clone2.age === 77); // Should be true
console.log(clone2.country === "US"); // Should be true

console.log(samePerson.age === 78); // Should be true
console.log(samePerson.country === "FR"); // Should be true