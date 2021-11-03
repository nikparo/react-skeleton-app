import styled from 'styled-components';

export const Box = styled.div({
  padding: '8px',
  margin: '8px',
});

export const FlexRow = styled.div({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
});

export const Button = styled.button({
  padding: '8px 12px',
  margin: '8px',
});

export const Input = styled.input({
  padding: '8px 12px',
  margin: '8px',
});

export const List = styled.ul({
  margin: 0,
  padding: 0,
  listStyleType: 'none',
});

export const ListItem = styled.li({
  border: '1px solid #ddd',
  borderRadius: '2px',
  margin: '8px',
  padding: '8px',
});

export const ErrorCard = styled.p({
  padding: '12px',
  margin: '8px',
  color: 'red',
  background: 'rgba(206, 17, 38, 0.05)',
});
