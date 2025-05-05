export interface UserProps {
  id: string;
  email: string;
  name?: string;
  refreshToken?: string;
  createdAt: Date;
  updatedAt: Date;
}