class Student {
  constructor(name) {
    this._name = name;
  }

  // Getter
  get name() {
    return this._name;
  }

  // Setter
  set name(value) {
    this._name = value;
  }
}

const student = new Student("John");

// Using getter
console.log(student.name); // John

// Using setter
student.name = "Alice";

console.log(student.name); // Alice