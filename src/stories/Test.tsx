export interface Props {
  label: string;
  onClick: () => void;
}

export const Test = ({label, ...props}: Props) => {
  return <button {...props}>{label}</button>;
}