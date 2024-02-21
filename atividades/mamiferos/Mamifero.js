export class Mammal {
  constructor(paws) {
    this.paws = paws;
  };

// Get's
  get viewPaws() {
    return this.paws;
  };

// Set's
  /**
   * @param {any} newPaws
   */
  set changePaws(newPaws) {
    this.paws = newPaws;
    return this.paws;
  };
};