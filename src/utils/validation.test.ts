import {validate} from './validation';

describe('Validation of login', function () {
    test('positive test', () => {
        expect(validate('login', 'Ololosha')).toStrictEqual('');
    });
    test('negative test: symbols', () => {
        expect(validate('login', 'Asdh##'))
        .toStrictEqual('Your login must contain only letters and numbers');
    });
    test('negative test: too long', () => {
      expect(validate('login', 'Asdsdfsdfsdfsdfsdfdsedfxcvsdfsdfsdf'))
      .toStrictEqual('Your login should have less than 20 symbols.');
    });
    test('negative test: too short', () => {
      expect(validate('login', 'As'))
      .toStrictEqual('Your login should have 3 or more symbols.');
    });
});

describe('Validation of password', function () {
  test('positive test', () => {
      expect(validate('password', 'Asdhkf678')).toStrictEqual('');
  });
  test('negative test', () => {
      expect(validate('password', 'Asdh4')).toStrictEqual('Your password is too short');
  });
});

describe('Validation of email', function () {
  test('positive test', () => {
      expect(validate('email', 'mail@mail.com')).toStrictEqual('');
  });
  test('negative test', () => {
      expect(validate('email', 'mailmail.com'))
      .toStrictEqual('It seems like your email is incorrect');
  });
});

describe('Validation of phone', function () {
  test('positive test', () => {
      expect(validate('phone', '12345612345')).toStrictEqual('');
  });
  test('negative test: too short', () => {
      expect(validate('phone', '1234'))
      .toStrictEqual('Your phone is too short. Please check.');
  });
  test('negative test: too long', () => {
    expect(validate('phone', '1234561234512345612345'))
    .toStrictEqual('Your phone is too long. Please check.');
  });
});

describe('Validation of names', function () {
  test('positive test', () => {
      expect(validate('names', 'Natalia')).toStrictEqual('');
  });
  test('negative test', () => {
      expect(validate('names', 'kk8'))
      .toStrictEqual('Name must start with a capital letter and contain only letters');
  });
});

describe('Validation of first name', function () {
  test('positive test', () => {
      expect(validate('first_name', 'Natalia')).toStrictEqual('');
  });
  test('negative test', () => {
      expect(validate('first_name', 'kk9'))
      .toStrictEqual('Name must start with a capital letter and contain only letters');
  });
});

describe('Validation of second name', function () {
  test('positive test', () => {
      expect(validate('second_name', 'Natalia')).toStrictEqual('');
  });
  test('negative test', () => {
      expect(validate('second_name', 'j99'))
      .toStrictEqual('Name must start with a capital letter and contain only letters');
  });
});

describe('Validation of message', function () {
  test('positive test', () => {
      expect(validate('message', 'Hi test')).toStrictEqual('');
  });
  test('negative test: empty', () => {
      expect(validate('message', '')).toStrictEqual('No message');
  });
});