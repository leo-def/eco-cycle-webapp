
import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import {
  Person as PersonIcon,
  MoveToInbox as InboxIcon,
  ExpandLess,
  ExpandMore
} from '@mui/icons-material/';

/**
 * AdminSidebar
 * @param {any}  props Properties
 * @return {React.Component} AdminSidebar Component
 */
export const AdminSidebar = React.memo((props: any) => {
  const { toggleSidebar } = props;
  AdminSidebar.displayName = 'AdminSidebar';
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (<React.Fragment>
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Administrativo" />{/* // i18n */}
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={open} timeout="auto" unmountOnExit onClick={() => toggleSidebar()}>
      <List component="div" disablePadding>

        <ListItemButton component={Link} to="/admin/group">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Grupos" />{/* // i18n */}
        </ListItemButton>

        <ListItemButton component={Link} to="/admin/measurement-unit">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Unidades de Medida" />{/* // i18n */}
        </ListItemButton>

        <ListItemButton component={Link} to="/admin/physical-quantity">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Grandezas de Medida" />{/* // i18n */}
        </ListItemButton>

        <ListItemButton component={Link} to="/admin/product">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Produtos" />{/* // i18n */}
        </ListItemButton>

        <ListItemButton component={Link} to="/admin/user">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Usuários" />{/* // i18n */}
        </ListItemButton>

      </List>
    </Collapse>
  </React.Fragment>
  );
})
