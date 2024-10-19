// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');
jest.mock('lodash', () => ({
  throttle: jest.fn((fn) => fn),
}));

describe('throttledGetDataFromApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should create instance with provided base url', async () => {
    const mockAxiosCreate = jest.spyOn(axios, 'create');
    const mockGet = jest.fn().mockResolvedValue({ data: {} });
    mockAxiosCreate.mockReturnValue({ get: mockGet } as any);

    await throttledGetDataFromApi('/test');

    expect(mockAxiosCreate).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    const mockGet = jest.fn().mockResolvedValue({ data: {} });
    jest.spyOn(axios, 'create').mockReturnValue({ get: mockGet } as any);

    await throttledGetDataFromApi('/test');

    expect(mockGet).toHaveBeenCalledWith('/test');
  });

  test('should return response data', async () => {
    const testData = { id: 1, title: 'Test' };
    const mockGet = jest.fn().mockResolvedValue({ data: testData });
    jest.spyOn(axios, 'create').mockReturnValue({ get: mockGet } as any);

    const result = await throttledGetDataFromApi('/test');

    expect(result).toEqual(testData);
  });
});
