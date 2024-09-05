
export type AccountRule = {
  description: string;
  unique: boolean;
  available_balance: boolean;
  pending_balance: boolean;
  blocked_balance: boolean;
  created_at?: Date
};