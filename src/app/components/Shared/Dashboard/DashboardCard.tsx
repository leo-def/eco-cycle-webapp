import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/More';

export const DashboardCard = (props) => {
  const { to, title, desc } = props
  return (<Card sx={{ maxWidth: 345 }}>
    <CardContent>
      {title ? <Typography gutterBottom variant="h5" component="div">{title}</Typography> : null}
      {desc ? <Typography variant="body2" color="text.secondary">{desc}</Typography> : null}
    </CardContent>
    <CardActions>
      {to ? <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        component={Link}
        to={to}
      >
        <MoreIcon />
      </IconButton> : null}
    </CardActions>
  </Card>)
}
