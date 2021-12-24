import parse from 'html-react-parser';

type Props = {
  value: string,
};

export function RenderHtml({ value }: Props) {
  return (
    <>{parse(value)}</>
  );
}
