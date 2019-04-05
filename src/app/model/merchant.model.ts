export class Merchant {
  merchant_id: number;
  name: string;
  location: string;
  email: string;
  contact_number: string;
  address: string;
  menu_id: string;
  logo: string;

  constructor(id:number) {
    this.merchant_id = id
  }
}