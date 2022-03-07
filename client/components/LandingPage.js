import React from 'react';
import { Button, Typography, Box, Paper } from '@material-ui/core';
import { ManSharpIcon } from '@material-ui/icons';

import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
export const LandingPage = () => {
  return (
    <div>
      <Box textAlign="center">
        <Typography variant="h2">GRACE NYC</Typography>
        <Typography variant="subtitle1" align="center">
          “If it's a good idea, go ahead and do it. It is much easier to
          apologize than it is to get permission.” - Grace Hopper
        </Typography>

        <Link to={'/womens'}>
          <Button size="medium" variant="contained" color="secondary">
            WOMENS
          </Button>
        </Link>
        <Link to={'/mens'}>
          <Button size="medium" variant="contained" color="primary">
            MENS
          </Button>
        </Link>
        <Link to={'/products'}>
          <Button size="medium" variant="contained">
            ALL STYLES
          </Button>
        </Link>
        <img />
      </Box>
    </div>
  );
};
