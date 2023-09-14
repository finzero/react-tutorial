import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const hookMenu = [
  {
    label: 'Use State',
    link: '/useState',
    active: false,
  },
  {
    label: 'Use Effect',
    link: '/useEffect',
    active: false,
  },
];
const typographyStyle = {
  minWidth: 100,
  cursor: 'pointer',
  padding: 1,
  '&:hover': {
    backgroundColor: '#1976d2',
    color: '#ffffff',
  },
};

const SubMenu = () => {
  let location = useLocation();

  const [menu, setMenu] = useState(hookMenu);

  useEffect(() => {
    setMenu((menu) => {
      return menu.map((m) => ({
        ...m,
        active: m.link === location.pathname,
      }));
    });
  }, [location]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        width: '100vw',
        background: '#cbeaff',
        padding: '5px',
      }}
    >
      {menu.map((m) => (
        <Link to={m.link} key={m.link} className={m.active ? 'active' : ''}>
          <Typography sx={typographyStyle}>{m.label}</Typography>
        </Link>
      ))}
    </Box>
  );
};

export default SubMenu;
