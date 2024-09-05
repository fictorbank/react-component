export type ExecutionRuleEntry = {
  id?: string;
  entry_type: string;
  entry_order: number;
  debit_account_source: string;
  debit_account_description: string;
  debit_balance_type: string;
  debit_balance_validation: string;
  credit_account_source: string;
  credit_account_description: string;
  credit_balance_type: string;
  credit_balance_validation: string;
};
export type ExecutionRule = {
  transaction_type: string;
  param_account_1: boolean;
  param_account_2: boolean;
  entries: ExecutionRuleEntry[];
  created_at?: Date;
};
