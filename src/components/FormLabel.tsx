import styled from 'styled-components';

const Label = styled.label({
  fontSize: '11px',
  display: 'flex',
  flexDirection: 'column',
  padding: '8px',
  '& *': {
    margin: '2px 0',
  },
});

interface Props {
  label: string;
  children?: React.ReactNode;
}

export function FormLabel({ label, children }: Props): JSX.Element {
  return (
    <Label>
      <span>{label}</span>
      {children}
    </Label>
  );
}
