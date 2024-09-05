export interface CardRequest {
  id: string
  name: string
  last4_digit: string
  limit: string
  product_id: string
  person_id: string
  address: Address
  status: string
  error_reason: string
  terms_of_use: TermsOfUse
  has_insurance: boolean
  tax_id: string
  created_at: string
  updated_at: string
}

export interface Address {
  street: string
  zip_code: string
  district: string
  city: string
  number: string
  state: string
  complement: string
}

export interface TermsOfUse {
  ip_address: string
  latitude: string
  longitude: string
}
