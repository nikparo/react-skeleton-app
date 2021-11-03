import { useEffect, useReducer } from 'react';
import { useAuthContext } from '../../api/use-login';
import { UIProps } from './LoginUI';

interface FormState {
  [x: string]: string;
}

interface ChangeAction {
  type: string;
  payload: string;
}

// Create a simple "key-value" store for the form data
// (This may be a bit overkill for such a simple component tbh...)
const reducer = (state: FormState, action: ChangeAction): FormState => ({
  ...state,
  [action.type]: action.payload,
});

export function useLoginLogic(): UIProps {
  const authContext = useAuthContext();
  const { error } = authContext;
  const [state, dispatch] = useReducer(reducer, {
    name: authContext.name,
    email: authContext.email,
  });
  const { name, email } = state;

  // Log the error in case we can't display it properly
  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  const errorMessage = typeof error?.message === 'string' ? error.message : undefined;

  return {
    name,
    email,
    errorMessage,
    onChange(event) {
      const { name: inputName, value } = event.currentTarget;
      dispatch({ type: inputName, payload: value });
    },
    onSubmit(event) {
      authContext.setUserDetails({ name, email });
      event.preventDefault(); // Prevent page refresh
    },
  };
}
