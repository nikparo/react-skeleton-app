import React, { useContext, useState } from 'react';
import useSWR from 'swr';

interface Response {
  data?: {
    client_id: string;
    email: string;
    sl_token: string;
  };
  meta: {
    request_id: string;
  };
  error?: {
    message: string;
  };
}

type LoginFn = ({ name, email }: { name: string; email: string }) => void;

interface AuthContextValue {
  slToken?: string;
  error?: { message: string };
  isLoggedIn: boolean;
  setUserDetails: LoginFn;
  name: string;
  email: string;
}

export const defaultAuthContext: AuthContextValue = {
  isLoggedIn: false,
  setUserDetails() {
    console.error('setUserDetails stub called!');
  },
  name: '',
  email: '',
};

export const AuthContext = React.createContext(defaultAuthContext);

export function useAuthContext() {
  return useContext(AuthContext);
}

const loginFetcher = (name: string, email: string): Promise<Response> =>
  fetch('https://api.supermetrics.com/assignment/register', {
    method: 'POST',
    body: JSON.stringify({
      client_id: 'ju16a6m81mhid5ue1z3v2g0uh',
      email,
      name,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

export function useLogin(): AuthContextValue {
  const [{ name, email }, setUserDetails] = useState({ name: '', email: '' });
  const shouldLogin = Boolean(name || email);

  const result = useSWR<Response, Error>(shouldLogin ? [name, email] : null, loginFetcher, {
    dedupingInterval: 1000 * 60 * 55, // Revalidate in 55min
  });

  // Ideally we would validate data here or in the loginFetcher
  const { data } = result;
  const error = result.error || data?.error;
  const { sl_token: slToken } = data?.data || {};
  const isLoggedIn = Boolean(shouldLogin && slToken && !error);

  return { slToken, error, isLoggedIn, name, email, setUserDetails };
}
