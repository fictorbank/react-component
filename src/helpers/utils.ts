export interface Pagination {
  last: boolean
  page: number
  totalPages: number
  totalCount: number
  size: number
}

export const statusMap = {
  waiting_customer: 'Aguardando cliente',
  credit_granted: 'Crédito concedido',
  canceled: 'Cancelado'
}

export function translateStatus<K extends keyof M, M>(
  status: K,
  statusMap: M
): M[K] | K {
  return statusMap[status] || status
}

export function onlyNumbers(value: string) {
  return value.replace(/\D/g, '')
}

export function getPersonTypeByDocument(value: string) {
  const personType = value.replace(/\D/g, '').length === 11 ? 'PF' : 'PJ'
  return personType
}

export function formatCpfCnpj(value?: string) {
  if (!value) return ''

  const cnpjCpf = value.replace(/\D/g, '')

  if (cnpjCpf.length === 11) {
    return cnpjCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
  }

  return cnpjCpf.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
    '$1.$2.$3/$4-$5'
  )
}

export function isValidPhoneNumber(value: string) {
  const length = onlyNumbers(value).length
  return length === 10 || length === 11
}

export function isValidEmail(email: string) {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}

export function isValidCpf(cpf: string) {
  const digitsOnly = cpf.replace(/\D/g, '')

  // Check if all digits are the same (invalid CPF)
  if (/^(\d)\1{10}$/.test(digitsOnly)) {
    return false
  }

  // Calculate the first verification digit
  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += parseInt(digitsOnly.charAt(i)) * (10 - i)
  }
  let firstVerificationDigit = 11 - (sum % 11)
  if (firstVerificationDigit >= 10) {
    firstVerificationDigit = 0
  }

  // Calculate the second verification digit
  sum = 0
  for (let i = 0; i < 10; i++) {
    sum += parseInt(digitsOnly.charAt(i)) * (11 - i)
  }
  let secondVerificationDigit = 11 - (sum % 11)
  if (secondVerificationDigit >= 10) {
    secondVerificationDigit = 0
  }

  // Check if the verification digits match the CPF's digits
  return (
    firstVerificationDigit === parseInt(digitsOnly.charAt(9)) &&
    secondVerificationDigit === parseInt(digitsOnly.charAt(10))
  )
}

export function isValidCnpj(cnpj: string) {
  const digitsOnly = cnpj.replace(/\D/g, '')

  // Check if all digits are the same (invalid CNPJ)
  if (/^(\d)\1{13}$/.test(digitsOnly)) {
    return false
  }

  // First verification digit calculation
  let sum = 0
  let weight = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  for (let i = 0; i < 12; i++) {
    sum += parseInt(digitsOnly.charAt(i)) * weight[i]
  }
  const firstVerificationDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11)

  // Second verification digit calculation
  sum = 0
  weight = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  for (let i = 0; i < 13; i++) {
    sum += parseInt(digitsOnly.charAt(i)) * weight[i]
  }
  const secondVerificationDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11)

  // Check if the verification digits match the CNPJ's digits
  return (
    firstVerificationDigit === parseInt(digitsOnly.charAt(12)) &&
    secondVerificationDigit === parseInt(digitsOnly.charAt(13))
  )
}

export function isValidTaxId(value: string) {
  const taxId = onlyNumbers(value)
  if (taxId.length === 11) {
    return isValidCpf(taxId)
  }

  return isValidCnpj(taxId)
}

export const formatBrl = (amount: number) => {
  return new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency'
  }).format(amount)
}
