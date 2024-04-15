export interface Company {
  id?: string;
  name: string;
  fantasyName: string;
  cnpj: string;
  email: string;
  cellphone: string;
  logo?: Buffer;
  colors: {
    primaryColor: string;
    secondaryColor: string;
  };
  address: {
    street: string;
    number: number;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  created_at?: Date;
  updated_at?: Date;
}
