
import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

/**
 * ClientSidebar
 * @param {any}  props Properties
 * @return {React.Component} ClientSidebar Component
 */
export const ClientSidebar = React.memo((props: any) => {
  const { toggleSidebar } = props;
  ClientSidebar.displayName = 'ClientSidebar';
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (<React.Fragment>
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Area do cliente" />{/* // i18n */}
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={open} timeout="auto" unmountOnExit onClick={() => toggleSidebar()}>
      <List component="div" disablePadding>

        <ListItemButton component={Link} to="/client/collect">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Areas de Coleta" />{/* // i18n */}
        </ListItemButton>

        <ListItemButton component={Link} to="/client/supply">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Produtos Oferecidos" />{/* // i18n */}
        </ListItemButton>

      </List>
    </Collapse>
  </React.Fragment>
  );
})
