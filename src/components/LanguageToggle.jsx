import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Tooltip title={language === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}>
      <IconButton
        onClick={toggleLanguage}
        sx={{
          color: 'white',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.2)',
          },
        }}
      >
        <LanguageIcon />
      </IconButton>
    </Tooltip>
  );
}
