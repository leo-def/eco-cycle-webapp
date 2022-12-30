import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  IconButton
} from '@mui/material';
import {
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';

/**
 * MeasurementUnitList
 *   MeasurementUnitList component
 * @param {any}  props Properties
 * @return {React.Component} MeasurementUnitList Component
 */
export const MeasurementUnitList = (props: any) => {
  const {
    rows,
    show,
    edit,
    remove
  } = props

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {rows.map((row) => (
        <ListItem
          key={row.id}
          disableGutters
          secondaryAction={<React.Fragment>
            <IconButton
              color="primary"
              aria-label="show"
              component="span"
              onClick={show ? show(row) : null}>
              <VisibilityIcon />
            </IconButton>

            <IconButton
              color="primary"
              aria-label="edit"
              component="span"
              onClick={edit ? edit(row) : null}>
              <EditIcon />
            </IconButton>

            <IconButton
              color="primary"
              aria-label="remove"
              component="span"
              onClick={remove ? remove(row) : null}>
              <DeleteIcon />
            </IconButton>

          </React.Fragment>}
        >
          <ListItemText primary={row?.title} />
        </ListItem>
      ))}
    </List>)
}
export default MeasurementUnitList;
