import React from 'react';
import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const { t } = useLanguage();

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.pricing'), path: '/pricing' },
    { label: t('nav.teachers'), path: '/teachers' },
  ];

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#0052CC' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Button
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
              }}
            >
              {t('nav.login')}
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'white',
                color: '#0052CC',
                '&:hover': { bgcolor: '#f0f0f0' },
              }}
            >
              {t('nav.signup')}
            </Button>
            <LanguageToggle />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
