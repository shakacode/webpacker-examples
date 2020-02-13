import "../src/globals";

const person = {};

const name = person.fullName ?? "Anonymous";
console.log(`?? operator example: Hello, ${name}!`);

const element = { index: 0, value: "foo" };
const index = element.index ?? -1; //  0 :D
console.log(`?? operator example: index: ${index}.`);

const indexUsingOr = element.index || -1; // -1 :(
console.log(`Compared to || operator example: indexUsingOr: ${indexUsingOr}.`);

const city = person.address?.city; // person.address could be not defined
const isNeighbor = person.address?.isCloseTo(me);
const sayingHay = person.sayHayUsing?.("Twitter"); // The person.sayHayUsing method could be not defined

console.log(`city = ${city}, isNeighbor = ${isNeighbor}, sayingHay = ${sayingHay}`);
