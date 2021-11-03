import styled from 'styled-components';
import { FormEvent, ChangeEvent } from 'react';
import { Button, ErrorCard, Input } from '../../components/BaseUI';
import { FormLabel } from '../../components/FormLabel';

export interface UIProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  name: string;
  email: string;
  errorMessage?: string;
}

const Form = styled.form({
  maxWidth: '300px',
  margin: '0 auto',
  padding: '8px',
  display: 'flex',
  flexDirection: 'column',
});

export function LoginUI({ onChange, onSubmit, name, email, errorMessage }: UIProps): JSX.Element {
  // Typically a library like formik would be used for forms. I'm using barebones react here
  // instead though as it's so minimal and to show how it could be done without libraries.
  return (
    <>
      <Form onSubmit={onSubmit}>
        <FormLabel label="Name:">
          <Input name="name" type="text" value={name} placeholder="Your name" onChange={onChange} />
        </FormLabel>
        <FormLabel label="Email:">
          <Input
            name="email"
            type="email"
            value={email}
            placeholder="Your email"
            onChange={onChange}
          />
        </FormLabel>
        {!!errorMessage && <ErrorCard>{errorMessage}</ErrorCard>}
        <Button type="submit">Login</Button>
      </Form>
    </>
  );
}
