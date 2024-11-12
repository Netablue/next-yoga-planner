// app/types/User.ts
export interface User {
  id: number;
  name: string | null;
  email: string;
  password: string;
  createdAt: Date;
}