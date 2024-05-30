export default class HolbertonClass {
    constructor(size, location) {
      this._size = this._validateNumber(size, 'Size');
      this._location = this._validateString(location, 'Location');
    }
  
    // Getter for size
    get size() {
      return this._size;
    }
  
    // Getter for location
    get location() {
      return this._location;
    }
  
    // Override valueOf method
    valueOf() {
      return this._size;
    }
  
    // Override toString method
    toString() {
      return this._location;
    }
  
    // Validation methods
    _validateNumber(value, attributeName) {
      if (typeof value !== 'number') {
        throw new TypeError(`${attributeName} must be a number`);
      }
      return value;
    }
  
    _validateString(value, attributeName) {
      if (typeof value !== 'string') {
        throw new TypeError(`${attributeName} must be a string`);
      }
      return value;
    }
  }