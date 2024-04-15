export interface User {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  cellphone: string;
  password: string;
  master: boolean;
  support: boolean;
  avatar?: Buffer;
  created_at?: Date;
  updated_at?: Date;
}
