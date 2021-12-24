export function IsString(string: any) {
    if (string === undefined || string === null) {
      return false;
    }

    if (Object.prototype.toString.call(string) !== '[object String]') {
      return false;
    }

    return true;
  }
