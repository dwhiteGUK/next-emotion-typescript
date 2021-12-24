function token() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

type Complexity = 'low' | 'medium' | 'high';

export function RandomGUID(complexity: Complexity = 'medium') {
  if (complexity === 'high') {
    return `${token()}${token()}-${token()}-${token()}-${token()}-${token()}${token()}${token()}`;
  }

  if (complexity === 'low') {
    return `${token()}${token()}`;
  }

  return `${token()}${token()}-${token()}-${token()}`;
}
