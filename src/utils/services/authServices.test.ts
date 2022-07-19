import mock from 'xhr-mock';
import {authAPI} from '../../api/auth-api';


const baseUrl = `https://ya-praktikum.tech/api/v2`
const signUpData = {"id":1415};
const profileInfoData = {
  first_name: "Natalia",
  second_name: "Tututu",
  login: "natalia",
  password: "Q1w2e3r4",
  email: "mail@gmail.com",
  phone: "89045197400",
  avatar: "/path/to/avatar.jpg",

};

beforeAll(() => {
    mock.setup();
});
afterEach(() => {
    mock.teardown();
});

test('Login', async () => {

    mock.post(`${baseUrl}/auth/signin`, (req, res) => {
      expect(req.header('Content-Type')).toEqual('application/json');
      expect(req.body()).toEqual('{"login":"natalia","password":"Q1w2e3r4"}');
      return res.status(200).body("OK");
    });

    
    const res = await authAPI.login({ login: 'natalia', password: 'Q1w2e3r4' });
    expect(res).toEqual('OK');
});

test('Signup', async () => {
    mock.post(`${baseUrl}/auth/signup`, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signUpData),
    });
    const res = await authAPI.signUp(profileInfoData);
    expect(res).toEqual(signUpData);
});

test('User info', async () => {
    mock.get(`${baseUrl}/auth/user`, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileInfoData),
    });
    const res = await authAPI.getUserInfo();
    expect(res).toEqual(profileInfoData);
});

// test('Logout', async () => {
//   mock.post(`${baseUrl}/auth/logout`, {
//     headers: { 'Content-Type': 'application/json' },
//     body: "OK",
//   });

//     const res = await authAPI.logout();
//     expect(res).toEqual('OK');
// });
