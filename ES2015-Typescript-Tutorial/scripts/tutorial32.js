"use strict";
var myMap1 = new Map();
myMap1.set("fname", "Chandler");
myMap1.set("age", 30);
console.log(myMap1.get("fname"));
var ob1 = {};
var ob2 = {};
myMap1.set(ob1, 10);
myMap1.set(ob2, 20);
console.log(myMap1.get(ob1));
myMap1.delete("fname");
myMap1.clear();
console.log(myMap1.size);
console.log(myMap1.has("fname"));
//# sourceMappingURL=tutorial32.js.map