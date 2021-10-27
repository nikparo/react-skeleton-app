import { UIProps } from './interfaces';

export function LoginUI({ handleChange, handleSubmit, name, email }: UIProps): JSX.Element {
  // Typically a library like formik would be used for forms. I'm using barebones react here
  // instead though as it's so minimal and to show how it could be done without libraries.
  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          <span>Name:</span>
          <input
            name="name"
            type="text"
            value={name}
            placeholder="Your name"
            onChange={handleChange}
          />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          <span>Email:</span>
          <input
            name="email"
            type="email"
            value={email}
            placeholder="Your email"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
