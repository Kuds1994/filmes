import { Address } from "./address"

export interface User extends UserKyes{
  id: string,
  email: string,
  password: string
}

interface UserKyes{

  [key: string]: string | undefined;

}