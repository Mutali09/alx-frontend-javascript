export default class Building {
    constructor(sqft) {
      if (new.target === Building) {
        throw new Error("Building is an abstract class and cannot be instantiated directly.");
      }
      this._sqft = this._validateNumber(sqft, 'Square feet');
    }
  
    // Getter for sqft
    get sqft() {
      return this._sqft;
    }
  
    // Abstract method check
    static ensureImplements(childClass) {
      if (typeof childClass.prototype.evacuationWarningMessage !== 'function') {
        throw new Error("Class extending Building must override evacuationWarningMessage");
      }
    }
  
    // Validation method
    _validateNumber(value, attributeName) {
      if (typeof value !== 'number') {
        throw new TypeError(`${attributeName} must be a number`);
      }
      return value;
    }
  }