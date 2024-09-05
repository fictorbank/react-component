export type GenialStatement = {
  data: GenialStatementLine[];
  metadata: StatementMetadata;
};

export type GenialStatementLine = {
  description: string;
  date: string;
  time: string;
  transaction_type: string;
  detail: string;
  amount: string;
  metadata: GenialStatementLineMetadata;
  id: string;
  external_id: string;
};

export type GenialStatementLineMetadata = {
  source_psp: string;
  source_name: string;
  source_document: string;
  source_account_number: string;
  destination_psp: string;
  destination_name: string;
  destination_document: string;
  destination_account_number: string;
  e2e: string;
  authentication: string;
  user_message: string;
  original_amount: string;
  barcode: string;
};

type StatementMetadata = {
  count: number;
  limit: number;
  has_more: boolean;
  current_cursor: string;
  next_cursor: string;
};
