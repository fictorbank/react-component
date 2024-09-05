export type Customer = {
  id: string;
  created_at?: string | null;
  updated_at?: string | null;
  deleted_at?: string | null;
  type: string;
  name: string;
  tax_id: string;
  status: string;
  metadata: any;
  provider_id?: string | null;
  referral_code?: string | null;
  has_alias_account?: boolean | null;
  company_name?: string | null;
  company_trading_name?: string | null;
};
