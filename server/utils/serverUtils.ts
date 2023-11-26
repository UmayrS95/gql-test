import * as fs from "fs";
import * as path from "path";
import Papa from 'papaparse';

export const loadCSVData = (fileName: string): Array<any> => {

  const csvFilePath = path.resolve(__dirname, fileName);
  const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

  const { data } = Papa.parse(fileContent, {
    delimiter: ',',
    header: true,
  });
  
  return data;
};