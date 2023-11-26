export interface Customer {
  email: string;
  forename: string;
  surname: string;
  contactNumber: string;
  postcode: string;
}

export interface Product {
  vin: string;
  colour: string;
  make: string;
  model: string;
  price: number;
}

export interface Query {
  customers: () => Customer[];
  products: () => Product[];
}
