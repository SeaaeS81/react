
import React from 'react';
import { Box } from '@mui/material';

const AllData = ({ children, ...props }) => (
  <Box>
    {JSON.stringify(props)}
    {children}
  </Box>
);

export default AllData;