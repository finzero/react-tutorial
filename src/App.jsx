import { Container } from '@mui/material';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import SubMenu from './components/SubMenu';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('ini App.jsx');
  }, []);

  return (
    <Container maxWidth={false} disableGutters>
      <ResponsiveAppBar />
      <SubMenu />
      <Container maxWidth={false} sx={{ mt: 1 }}>
        <Outlet />
      </Container>
    </Container>
  );
}

export default App;
