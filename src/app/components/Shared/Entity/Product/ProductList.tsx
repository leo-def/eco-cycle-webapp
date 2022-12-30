import React, { useMemo } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import {
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';

/**
 * ProductList
 *   ProductList component
 * @param {any}  props Properties
 * @return {React.Component} ProductList Component
 */
export const ProductList = (props: any) => {
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
          <ListItemText primary={row.title} />
        </ListItem>
      ))}
    </List>)
}
export default ProductList;
