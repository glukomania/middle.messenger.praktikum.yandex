import mock from 'xhr-mock';
import {authAPI} from './auth-api';

const baseUrl = `https://ya-praktikum.tech/api/v2`

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