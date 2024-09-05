export interface Transaction {
  id: string;
  transaction_type: string;
  external_id: string | null;
  metadata: Record<string, any>;
  amount: number;
  parent_id: string | null;
  currency: string;
  created_at: string;
  settled_at: string | null;
}

export interface ExecuteTransaction {
  transaction_type: string;
  external_id: string | null;
  metadata: Record<string, any>;
  entries: TransactionEntry[];
  parent_id: string | null;
  settled_at: string | null;
}

export interface TransactionEntry {
  entry_type: string;
  entry_order: number;
  currency: string;
  amount: number;
  debit_balance_id: string;
  debit_balance_validation: string;
  credit_balance_id: string;
  credit_balance_validation: string;
}
export interface CompleteTransactionEntry {
  id: string;
  type: string;
  entry_type: string;
  transaction_id: string;
  transaction_type: string;
  credit_balance_id: string;
  credit_seq_num: number;
  credit_balance_after: number;
  debit_balance_id: string;
  debit_seq_num: number;
  debit_balance_after: number;
  entry_order: number;
  currency: string;
  amount: number;
  external_id: string | null;
  parent_transaction_id: string | null;
  metadata: Record<string, any>;
  created_at: string;
  settled_at: string | null;
}
