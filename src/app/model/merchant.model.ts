export class Merchant {
  merchantId: number;
  name: string;
  location: string;
  email: string;
  contact_number: string;
  address: string;
  menu_id: string;
  logo: string;

  constructor(id:number) {
    this.merchantId = id
  }
}