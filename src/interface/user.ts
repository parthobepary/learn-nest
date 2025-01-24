import { Auth } from '../auth/schemas/auth.schema';

export interface User {
  user: Auth;
  token?: string;
}
