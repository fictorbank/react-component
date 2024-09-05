export type Balance = {
  amount: number;
  account_id: string;
  currency: string;
  balance_type: string;
  balance_id: string;
  created_at: string;
  seq_num: number;
};

export type CoreBalance = {
  amount: number;
  account_id: string;
  currency: string;
  balance_type: string;
  id: string;
  created_at: string;
  seq_num: number;
};
