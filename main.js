// #1
class Account {
  constructor({ login, email }) {
    this.login = login;
    this.email = email;
  }
  getInfo() {
    console.log(this.email);
    console.log(this.login);
  }
}

const mango1 = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango1.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly1 = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly1.getInfo(); // Login: Poly, Email: poly@mail.com

// #2
class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  }
}
const mango2 = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});

mango2.getInfo(); // User Mango is 2 years old and has 20 followers

const poly2 = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});

poly2.getInfo(); // User Poly is 3 years old and has 17 followers

// #3
class Storage {
  constructor(arr) {
    this.arr = arr;
  }
  getItems() {
    return this.arr;
  }
  addItem(item) {
    this.arr.push(item);
  }
  removeItem(item) {
    this.arr = this.arr.filter((w) => w !== item);
  }
}

const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

console.log(storage.getItems()); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem("Дроїд");
console.log(storage.getItems()); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem("Пролонгер");
console.log(storage.getItems()); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// #4
class StringBuilder {
  constructor(_value) {
    this._value = _value;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value = this._value.padEnd(this._value.length + str.length, str);
  }
  prepend(str) {
    this._value = this._value.padStart(this._value.length + str.length, str);
  }
  pad(str) {
    this._value = this._value.padEnd(this._value.length + str.length, str);
    this._value = this._value.padStart(this._value.length + str.length, str);
  }
}
const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='

// #5
class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
    );
  }

  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    }
  }

  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value;
    }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
