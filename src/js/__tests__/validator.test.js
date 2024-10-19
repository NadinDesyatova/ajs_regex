import Validator from "../validator";


test.each([
  ['Li'],
  ['Gerry_777-holy33new']
])(
  ('should validate correct username %s'), 
  (username) => {
    const validator = new Validator();
    const result = validator.validateUsername(username);
    const expected = `${username} is available`;

    expect(result).toEqual(expected);
  }
);

test.each([
  ['Jerry_'],
  ['-Joe'],
  ['7Days'],
  ['Mr5555Mittens'],
  ['Terry1']
])(
  ('should return invalid name error for username %s'), 
  (username) => {
    const incorrectUsername = function() {
      const newValidator = new Validator();
      newValidator.validateUsername(username);
    };
    const expected = 'invalid username';

    expect(incorrectUsername).toThrow(expected);
  }
);
