import { v4 as uuidv4 } from "uuid";

export class Animal {
  constructor(name, type, age, color, image, vaccine) {
    this.id = this.generateId();
    this.name = name;
    this.type = type;
    this.age = age;
    this.color = color;
    this.image = image;
    this.vaccine = vaccine;
  }

  generateId() {
    return uuidv4();
  }
}