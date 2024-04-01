export interface User {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  cellphone: string;
  password: string;
  master: boolean;
  support: boolean;
  avatar?: string;
  created_at?: Date;
  updated_at?: Date;
}
