import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { Navbar } from '../components/Navbar';

const MainLayoutRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  overflow: 'hidden',
  width: '100%',
});

const MainLayoutContent = styled.div({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto',
  position: 'relative',
});

export function MainLayout() {
  return (
    <MainLayoutRoot>
      <Navbar />
      <MainLayoutContent>
        <Outlet />
      </MainLayoutContent>
    </MainLayoutRoot>
  );
}
