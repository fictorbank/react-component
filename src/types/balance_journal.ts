import { PaginationWithCursor } from './pagination';

export type BalanceJournal = {
  id: string;
  balance_id: string;
  seq_num: number;
  transaction_id: string;
  entry_id: string;
  entry_type: string;
  entry_order: number;
  currency: string;
  amount: number;
  transaction_type: string;
  external_id: string | null;
  parent_transaction_id: string | null;
  metadata: Record<string, any>;
  balance_after: number;
  created_at: string;
  settled_at: string | null;
  cursor: string;
  type: string;
};

export type BalanceJournalWithAmountString = {
  id: string;
  balance_id: string;
  seq_num: number;
  transaction_id: string;
  entry_id: string;
  entry_type: string;
  entry_order: number;
  currency: string;
  amount: string;
  transaction_type: string;
  external_id: string | null;
  parent_transaction_id: string | null;
  metadata: Record<string, any>;
  balance_after: string;
  created_at: string;
  settled_at: string | null;
  cursor: string;
  type: string;
};

export type PaginatedBalanceJournal = {
  data: BalanceJournal[];
  metadata: PaginationWithCursor;
};
