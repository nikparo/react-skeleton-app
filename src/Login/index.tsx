import { Props } from './interfaces';
import { useLogin } from './login-logic';
import { LoginUI } from './LoginUI';

// Splitting up logic and ui has several benefits, especially when it comes to testability.
export const Login = ({ loginUser }: Props): JSX.Element => {
  const uiProps = useLogin(loginUser);

  return <LoginUI {...uiProps} />;
};
