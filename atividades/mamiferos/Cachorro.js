import { Mammal } from './Mamifero.js'

export class Dog extends Mammal{
  constructor(name, race, paws) {
    super(paws);
    this.name = name;
    this.race = race;
  };

// Get's
  get viewName() {
    return this.name;
  };

  get viewRace() {
    return this.race;
  };

// Set's
  /**
   * @param {any} newName
   */
  set changeName(newName) {
    this.name = newName;
    return this.name
  };
  
  /**
   * @param {any} newRace
   */
  set changeRaws(newRace) {
    this.race = newRace;
    return this.race;
  };
};