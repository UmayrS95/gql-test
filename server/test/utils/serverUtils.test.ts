import { loadCSVData } from "../../utils/serverUtils";

describe('loadCSVData function', () => {
  test('should load and parse CSV data correctly', () => {
    const result = loadCSVData('customers.csv');

    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toEqual(3);
  });
});