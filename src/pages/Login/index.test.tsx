import { render, fireEvent, screen } from '@testing-library/react';
import { AuthContext, defaultAuthContext } from '../../api/use-login';
import Login from './index';

// Sometimes it's handy to test the logic (useLogin) or parts of it separately.
// But for interaction related to dom interaction (clicks etc) its usually better
// and easier to fire events.

const getActiveElement = () => document.activeElement || document.body;

test('Updates the form on change and submits the name and email on login', () => {
  // Mock setUserDetails and render the Login component
  const setUserDetails = jest.fn(({ name, email }: { name: string; email: string }) => [
    name,
    email,
  ]);

  render(
    <AuthContext.Provider value={{ ...defaultAuthContext, setUserDetails }}>
      <Login />
    </AuthContext.Provider>,
  );

  // Mimic user interaction by focusing elements first and then "typing"
  screen.getByLabelText(/Name/i).focus();
  fireEvent.change(getActiveElement(), { target: { value: 'Sam' } });

  screen.getByLabelText(/Email/i).focus();
  fireEvent.change(getActiveElement(), { target: { value: 'sam@example.com' } });

  fireEvent.click(screen.getByText(/Login/i));

  expect(setUserDetails.mock.calls[0]).toEqual([{ name: 'Sam', email: 'sam@example.com' }]);
  expect(setUserDetails.mock.results[0].value).toEqual(['Sam', 'sam@example.com']);
});
