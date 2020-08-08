class Person {
  constructor(name, age = 0) {
    this.name = name;
    this.age = age;
  }

  getDescription() {
    return `Hi ${this.name}. You are ${this.age} years old`;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation = "Mars") {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }

  getDescription() {
    let greetings = super.getDescription();
    if (this.hasHomeLocation()) {
      return `${greetings} is from ${this.homeLocation}`;
    } else {
      return `${greetings}`;
    }
  }
}

const him = new Traveller("Luke", 27, "Kuching");
console.log(him.getDescription());
