const student = {
  name: 'hyeyeong',
  age: 10,
}

function Student(name, age) {
  this.name = name;
  this.age = age;
  this.hello = () => console.log('hello');
}

const hyeyeong = new Student('hyeyeong', 10);

student.hello = () => console.log('hello');
student.name = 'ryan';
console.log(student.name);

student.gender = 'male';

// Getter, Setter
const obj = {
  name: 'Monica',

  get getName() {
    return this.name;
  },
  set setName(name) {
    this.name = name;
  }
}

console.log(obj.getName);
obj.setName = 'Hyeyeong';
console.log(obj.getName);