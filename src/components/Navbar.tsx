import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { List, ListItem } from './BaseUI';

const NavbarList = styled(List)({
  display: 'flex',
  flexDirection: 'row',
});

export const Navbar = () => (
  <nav>
    <NavbarList>
      <ListItem>
        <Link to="/">Home</Link>
      </ListItem>
      <ListItem>
        <Link to="/logout">Logout</Link>
      </ListItem>
    </NavbarList>
  </nav>
);
