export type CoreStatement = {
  id: string;
  type: string;
  transaction_id: string;
  transaction_type: string;
  entry_id: string;
  entry_type: string;
  entry_order: number;
  amount: string;
  balance_after: string;
  balance_seq_num: number;
  created_at: string;
  settled_at: string;
  parent_transaction_id: string;
  external_id: string;
  metadata: Map<string, any>;
};

export type CoreStatementResponse = {
  metadata: CoreStatementMetadata;
  data: CoreStatement[];
};

type CoreStatementMetadata = {
  limit: string;
  count: string;
  current_cursor: string;
  next_cursor: string;
};
