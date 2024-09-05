import { BalanceValidations } from './balance_validation';

export type SplitDetination = {
  account_id: string;
  amount: number;
};
export type Split = {
  transaction_type: string;
  currency: string;
  amount: number;
  source_account_id: string;
  source_balance_validation: BalanceValidations;
  settled_at: string;
  external_id: string;
  destinations: SplitDetination[];
};
