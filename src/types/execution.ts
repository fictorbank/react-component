export type Execution = {
  transaction_type: string;
  currency: string;
  amount: number;
  param_account_1?: string;
  param_account_2?: string;
  settled_at?: string;
  external_id?: string;
};
