import { Address } from '@/types/address'

import { IsValidString } from '@/lib/is-valid-string'

export function GenerateAddress(address: Address, businessOrPerson?: string) {
  const result: string[] = [];

  if (IsValidString(businessOrPerson)) {
    // @ts-ignore
    result.push(businessOrPerson);
  }

  if (IsValidString(address.line_1)) {
    result.push(address.line_1);
  }

  if (IsValidString(address.line_2)) {
    // @ts-ignore
    result.push(address.line_2);
  }

  if (IsValidString(address.line_3)) {
    // @ts-ignore
    result.push(address.line_3);
  }

  if (IsValidString(address.line_4)) {
    // @ts-ignore
    result.push(address.line_4);
  }

  if (IsValidString(address.postcode)) {
    result.push(address.postcode);
  }

  return result.join(', ');
}
