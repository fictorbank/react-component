export type UnconfirmedAuthorization = {
  transaction_id: string;
  transaction_type: string;
  created_at: Date;
  currency: string;
  amount: number;
  param_account_1: string;
  param_account_2: string;
  settled_at: string;
  external_id: string;
};

export type Authorization = {
  transaction_type: string;
  currency: string;
  amount: number;
  param_account_1: string;
  param_account_2: string;
  settled_at: string;
  external_id: string;
};
