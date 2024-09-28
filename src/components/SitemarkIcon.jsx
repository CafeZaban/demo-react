import * as React from 'react';
import { Box, Typography } from '@mui/material';

export default function SitemarkIcon() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'left' }}>
      {/* Brand Name */}
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#4876EE' }}>
        Cafe Zaban
      </Typography>
    </Box>
  );
}