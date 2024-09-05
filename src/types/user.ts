export interface User {
  id: string;
  name: string;
  email: string;
  role: 'owner' | 'admin' | 'user';
  status: 'active' | 'inactive';
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateUser {
  name: string;
  email: string;
  role: string;
}
