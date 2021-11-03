import { useLoginLogic } from './login-logic';
import { LoginUI } from './LoginUI';

// Splitting up logic and UI has several benefits. It e.g. allows more granular testing
// and storybook stories, and it's a nice separation of concerns.
const Login = (): JSX.Element => {
  const uiProps = useLoginLogic();

  return <LoginUI {...uiProps} />;
};

export default Login;
