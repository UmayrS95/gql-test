import fs from 'fs'
import csv from 'csv-parser'
import { Customer, Product } from '../interfaces';

export const loadCSVData = (filePath: string): Array<any> => {
  const data: Array<Customer | Product> = new Array();
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row: Customer | Product) => {
      data.push(row);
    })
    .on('end', () => {
      console.log(`CSV file ${filePath} successfully processed.`);
    });
  return data;
};