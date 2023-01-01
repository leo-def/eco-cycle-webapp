
import React from 'react';
import {
  Box,
  List,
  Drawer,
  ClickAwayListener
} from '@mui/material';
import { getToggleSidebar, isSidebarOpen } from '../../hooks/Sidebar';
import { getSetGroup } from '../../hooks/Module/Group/Set';
import { GroupSidebar } from './Group/GroupSidebar';
import { AdminSidebar } from './Admin/AdminSidebar';
import { ClientSidebar } from './Client/ClientSidebar';

/**
 * Sidebar
 * @param {any}  props Properties
 * @return {React.Component} Sidebar Component
 */
export const Sidebar = React.memo((props: any) => {
  Sidebar.displayName = 'Sidebar';
  const anchor = 'left';
  const isOpen = isSidebarOpen();

  const toggleSidebar = getToggleSidebar();
  const setGroup = getSetGroup();

  const handleClickAway = () => {
    if(isOpen) {
      toggleSidebar();
    }
  }

  return (
    <Drawer
      anchor={anchor}
      open={isOpen}
    >
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
      >
        <List>

          {isOpen
            ? (<React.Fragment>
              <ClientSidebar {...props} toggleSidebar={toggleSidebar} />
              <AdminSidebar {...props} toggleSidebar={toggleSidebar} />
              {setGroup ? <GroupSidebar {...props} toggleSidebar={toggleSidebar} /> : null}
            </React.Fragment>)
            : null}

        </List>
      </Box>
  </ClickAwayListener>
    </Drawer>
  );
})
