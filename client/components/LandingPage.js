import React from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { ManSharpIcon } from '@material-ui/icons';

import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
export const LandingPage = () => {
  return (
    <div>
      <img id="landing-page-image" src={'../images/city-banner-home.png'} />
      <Box textAlign="center">
        <Typography variant="h2" align="center">
          GRACE NYC
        </Typography>
        <Typography variant="subtitle1" align="center">
          “If it's a good idea, go ahead and do it. It is much easier to
          apologize than it is to get permission.” - Grace Hopper
        </Typography>

        <Link to={'/womens'} style={{ textDecoration: 'none' }}>
          <Button
            size="medium"
            variant="contained"
            style={{ backgroundColor: 'pink' }}
          >
            WOMENS
          </Button>
        </Link>
        <Link to={'/mens'} style={{ textDecoration: 'none' }}>
          <Button size="medium" variant="contained" color="primary">
            MENS
          </Button>
        </Link>
        <Link to={'/products'} style={{ textDecoration: 'none' }}>
          <Button
            size="medium"
            variant="contained"
            style={{ backgroundColor: 'gold' }}
          >
            ALL STYLES
          </Button>
        </Link>
        <img />
      </Box>
    </div>
  );
};
