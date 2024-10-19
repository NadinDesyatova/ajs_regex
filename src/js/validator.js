export default class Validator {
  constructor() {
    this.regexp = /^[a-z]([-_a-z]|\d{0,3}(?=[-_a-z]))*[a-z]$/i;
  }

  validateUsername(username) {
    if (username.match(this.regexp) === null) {
      throw new Error('invalid username');
    }
    
    return `${username} is available`;
  }
};
