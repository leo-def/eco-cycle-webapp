
import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

/**
 * GroupSidebar
 * @param {any}  props Properties
 * @return {React.Component} GroupSidebar Component
 */
export const GroupSidebar = React.memo((props: any) => {
  const { toggleSidebar } = props;
  GroupSidebar.displayName = 'GroupSidebar'
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (<React.Fragment>
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Dados Grupo" />{/* // i18n */}
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={open} timeout="auto" unmountOnExit onClick={() => toggleSidebar()}>
      <List component="div" disablePadding>

        <ListItemButton sx={{ pl: 4 }} component={Link} to="/group/collaborator">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Colaboradores" />{/* // i18n */}
        </ListItemButton>

        <ListItemButton sx={{ pl: 4 }} component={Link} to="/group/place">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Locais" />{/* // i18n */}
        </ListItemButton>

        <ListItemButton sx={{ pl: 4 }} component={Link} to="/group/vehicle">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Veiculos" />{/* // i18n */}
        </ListItemButton>


        <ListItemButton sx={{ pl: 4 }} component={Link} to="/group/collect">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Areas de Coleta" />{/* // i18n */}
        </ListItemButton>

        <ListItemButton sx={{ pl: 4 }} component={Link} to="/group/supply">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Produtos Oferecidos" />{/* // i18n */}
        </ListItemButton>

      </List>
    </Collapse>
  </React.Fragment>
  )
})
