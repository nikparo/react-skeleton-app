import { useRoutes } from 'react-router-dom';

import { AuthContext, useLogin } from './api/use-login';
import { routes } from './routes';

export default function App() {
  const authContext = useLogin();
  const element = useRoutes(routes);

  return (
    <AuthContext.Provider value={authContext}>
      <div className="App">{element}</div>;
    </AuthContext.Provider>
  );
}
