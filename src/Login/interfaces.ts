import { FormEvent, ChangeEvent } from 'react';

export interface Props {
  loginUser: (name: string, email: string) => void;
}

export interface UIProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  name: string;
  email: string;
}
