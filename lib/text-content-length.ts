import he from 'he'

export function TextContentLength(value: string) {
  let text:string|null = value;

  if (typeof window !== 'undefined') {
    const tag = document.createElement('span');
    tag.innerHTML = value;
    text = tag.textContent;
  } else {
    text = he.decode(
      value.replace(/<[^>]+>/g, '')
    );
  }

  return text?.length || value.length;
}
