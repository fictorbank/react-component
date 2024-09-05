export type Account = {
  id: string;
  type: string;
  code_number: string;
  description: string;
  billing_plan_id?: string;
  billing_plan_name?: string;
  created_at?: string;
};

export type NewAccount = {
  id: string;
  description: string;
  billing_plan_id?: string;
  billing_plan_name?: string;
  created_at?: string;
};
