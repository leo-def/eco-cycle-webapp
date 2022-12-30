import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

/**
 * NotFound
 *   Content to show when page not found
 * @param {any}  props Properties
 * @return {React.Component} NotFound Component
 */
export const NotFound = React.memo((props: any) => {
  NotFound.displayName = 'NotFound';
  const [, setShowMessage] = useState(false as boolean);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const to = useMemo(() => (props.to || '/'), [props.to]);
  return (<React.Fragment>
    <Link to={to}>
      <Typography variant="h1">
        Not Found
      </Typography>
    </Link>
  </React.Fragment>);
})


export default NotFound;
