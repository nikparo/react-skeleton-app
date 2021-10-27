import { useReducer } from 'react';
import { Props, UIProps } from './interfaces';

interface FormState {
  [x: string]: string;
}

interface ChangeAction {
  type: string;
  payload: string;
}

const initialState: FormState = { name: '', email: '' };

// Create a simple "key-value" store for the form data
// FIXME: This may be a bit overkill + not as readable as setState for such a simple component...
const reducer = (state: FormState, action: ChangeAction): FormState => ({
  ...state,
  [action.type]: action.payload,
});

export function useLogin(loginUser: Props['loginUser']): UIProps {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, email } = state;

  return {
    name,
    email,
    handleChange(event) {
      const { name: inputName, value } = event.currentTarget;
      dispatch({ type: inputName, payload: value });
    },
    handleSubmit(event) {
      loginUser(name, email);
      // Prevent page refresh
      event.preventDefault();
    },
  };
}
