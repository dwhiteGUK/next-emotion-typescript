import { IsString } from '@/lib/is-string'

export function IsValidString(string: any) {
  return IsString(string) && string.length > 0;
}
