// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <Typography variant="h3" pt={3} gutterBottom>
        Call a friend
      </Typography>
      <Divider>
        <Typography variant="subtitle2" gutterBottom>
          Your friendly contact app
        </Typography>
      </Divider>
    </>
  );
};

export default Header;
