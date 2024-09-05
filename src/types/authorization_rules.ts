export type AuthorizationRuleEntry = {
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

export type AuthorizationRuleAuthorization = {
  entries: AuthorizationRuleEntry[];
};

export type AuthorizationRuleConfirmation = {
  entries: AuthorizationRuleEntry[];
};

export type AuthorizationRule = {
  transaction_type: string;
  param_account_1: boolean;
  param_account_2: boolean;
  authorization: AuthorizationRuleAuthorization;
  confirmation: AuthorizationRuleConfirmation;
  created_at?: Date;
};
