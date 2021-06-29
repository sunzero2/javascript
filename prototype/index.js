// function Person() {
//   this.eyes = 2;
//   this.nose = 1;
// }

// const kim1 = new Person();
// const lee1 = new Person();

// kim1.eyes = 3;

// function Person2() {}
// Person2.prototype.eyes = 2;
// Person2.prototype.nose = 1;

// const kim2 = new Person2();
// const lee2 = new Person2();

// const obj = {};

function Test() {}
Test.prototype.a = 2;
Test.prototype.b = 1;
const test = new Test();

test.a = 3
test.b = 4
Test.prototype.c = 5;
console.log(test.c);